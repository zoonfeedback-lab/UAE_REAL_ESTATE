"use strict";

import { redirect } from "next/navigation";
import AuthService from "@/services/AuthService";

export async function signIn(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Please fill in all fields" };
  }

  const result = await AuthService.login({ email, password });

  if (result.success) {
    redirect("/");
  } else {
    return { error: result.message };
  }
}

export async function signUp(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const name = `${firstName} ${lastName}`;

  if (!email || !password || !firstName || !lastName) {
    return { error: "Please fill in all fields" };
  }

  const result = await AuthService.register({ name, email, password });

  if (result.success) {
    redirect("/login");
  } else {
    return { error: result.message };
  }
}

