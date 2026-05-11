import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { connectDB } from "@/services/DatabaseConnectionService";
import UserModel from "@/models/User";
import { isLoginBody } from "@/types/typepredicate/loginPredicate";
import { IUser, User } from "@/types/user";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    // Safety Guard: Check for JWT_SECRET before any DB operations
    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is missing in environment variables");
      return NextResponse.json(
        { success: false, message: "Server configuration error" },
        { status: 500 }
      );
    }

    const body = await request.json();


    if (!isLoginBody(body)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid login data. Email and password are required.",
        },
        { status: 400 }
      );
    }

    const { email, password } = body;

    // Find user and include password field
    const user: IUser | null = await UserModel.findOne({ email }).select("+password");

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password",
        },
        { status: 401 }
      );
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password!);

    if (!isPasswordMatch) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password",
        },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      {
        userId: user._id.toString(),
        role: user.role,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "1h",
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
        message: "Logged in successfully",
        user: userData,
      },
      { status: 200 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60, // 1 hour
    });


    return response;
  } catch (error) {
    console.error("Login error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong during login",
      },
      { status: 500 }
    );
  }
}
