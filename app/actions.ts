"use strict";

import { redirect } from "next/navigation";

export async function signIn(prevState: any, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  console.log("Signing in:", { email, password });

  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Basic validation
  if (!email || !password) {
    return { error: "Please fill in all fields" };
  }

  // Success simulation
  // In a real app, you would verify credentials and set a cookie/session
  
  // For this demo, we'll redirect to home
  redirect("/");
}

export async function signUp(prevState: any, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");

  console.log("Signing up:", { email, password, firstName, lastName });

  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!email || !password || !firstName || !lastName) {
    return { error: "Please fill in all fields" };
  }

  // Redirect to home upon success
  redirect("/");
}
