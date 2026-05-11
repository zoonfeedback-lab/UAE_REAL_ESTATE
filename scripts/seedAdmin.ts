import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../models/User";
import * as dotenv from "dotenv";

dotenv.config();

async function seedAdmin() {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    console.error("MONGODB_URI is not defined in .env");
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB...");

    const adminEmail = "admin@estatehub.com";
    const existingAdmin = await User.findOne({ email: adminEmail });

    if (existingAdmin) {
      console.log("Admin already exists. Skipping seed.");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash("adminPassword123", 10);

    const admin = new User({
      name: "System Admin",
      email: adminEmail,
      password: hashedPassword,
      role: "admin",
    });

    await admin.save();
    console.log("Admin seeded successfully!");
    console.log("Email: admin@estatehub.com");
    console.log("Password: adminPassword123");

  } catch (error) {
    console.error("Error seeding admin:", error);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

seedAdmin();
