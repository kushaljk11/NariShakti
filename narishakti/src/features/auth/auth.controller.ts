import { NextResponse } from "next/server";
import { loginUser, signupUser } from "@/features/auth/auth.service";

type SignupBody = {
  name?: string;
  email?: string;
  password?: string;
  role?: "learner" | "mentor" | "admin" | "organization";
  phone?: string;
  location?: string;
  bio?: string;
  profile_image?: string;
};

type LoginBody = {
  email?: string;
  password?: string;
};

export async function signupController(body: SignupBody) {
  try {
    const result = await signupUser(body);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Signup failed" },
      { status: 400 },
    );
  }
}

export async function loginController(body: LoginBody) {
  try {
    const result = await loginUser(body.email ?? "", body.password ?? "");
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Login failed" },
      { status: 401 },
    );
  }
}
