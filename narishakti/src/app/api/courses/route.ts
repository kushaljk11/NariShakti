import { NextResponse } from "next/server";
import { listCourses } from "@/features/courses/course.service";

export async function GET() {
  const data = await listCourses();
  return NextResponse.json({ data });
}
