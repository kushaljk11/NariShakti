import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      message: "Use /api/auth/signup or /api/auth/login",
    },
    { status: 400 },
  );
}
