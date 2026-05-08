import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { connectDB } from "@/services/DatabaseConnectionService";
import UserModel from "@/models/User";
import { isRegisterBody } from "@/types/typepredicate/registerPredicate";
import { IUser, User } from "@/types/user";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();

    if (!isRegisterBody(body)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid registration data. Name, email, and password are required.",
        },
        { status: 400 }
      );
    }

    const { name, email, password, role } = body;

    if (password.length < 6) {
      return NextResponse.json(
        {
          success: false,
          message: "Password must be at least 6 characters",
        },
        { status: 400 }
      );
    }

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "User already exists with this email",
        },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user: IUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      role: role || "buyer",
    });

    const token = jwt.sign(
      {
        userId: user._id.toString(),
        role: user.role,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "7d",
      }
    );

    const userData: User = {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
    };

    const response = NextResponse.json(
      {
        success: true,
        message: "User registered successfully",
        user: userData,
      },
      { status: 201 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
    });

    return response;
  } catch (error) {
    console.error("Register error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong during registration",
      },
      { status: 500 }
    );
  }
}