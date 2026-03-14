import { NextResponse } from "next/server";
import { getSafeUserByEmail } from "@/features/auth/auth.service";
import { parseAppToken } from "@/lib/auth";

export async function POST() {
  return NextResponse.json(
    {
      message: "Use /api/auth/signup or /api/auth/login",
    },
    { status: 400 },
  );
}

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get("authorization") ?? "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";

    if (!token) {
      return NextResponse.json({ message: "Missing auth token" }, { status: 401 });
    }

    const payload = parseAppToken(token);
    if (!payload) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    const user = await getSafeUserByEmail(payload.email);
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Failed to fetch user" },
      { status: 400 },
    );
  }
}
