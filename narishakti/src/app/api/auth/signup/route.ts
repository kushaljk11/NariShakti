import { NextRequest } from "next/server";
import { signupController } from "@/features/auth/auth.controller";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as {
    name?: string;
    email?: string;
    password?: string;
    role?: "learner" | "mentor" | "admin" | "organization";
    phone?: string;
    location?: string;
    bio?: string;
    profile_image?: string;
  };

  return signupController(body);
}
