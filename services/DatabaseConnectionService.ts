// src/services/DatabaseConnectionService.ts

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is missing in environment variables");
}

type CachedConnection = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  var mongooseConnection: CachedConnection | undefined;
}

const cached: CachedConnection = global.mongooseConnection || {
  conn: null,
  promise: null,
};

global.mongooseConnection = cached;

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI!, {
      bufferCommands: false,
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log("MongoDB connected");
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    console.error("MongoDB connection failed:", error);
    throw error;
  }
}