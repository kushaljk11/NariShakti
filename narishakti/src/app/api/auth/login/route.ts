import { NextRequest } from "next/server";
import { loginController } from "@/features/auth/auth.controller";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as { email?: string; password?: string };
  return loginController(body);
}
