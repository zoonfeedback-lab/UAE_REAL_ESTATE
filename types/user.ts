import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  role: "admin" | "seller" | "buyer";
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}
