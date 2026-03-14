import { NextResponse } from "next/server";
import { createCourse, listCourses } from "@/features/courses/course.service";

export async function GET() {
  try {
    const data = await listCourses();
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Failed to fetch courses" },
      { status: 400 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      title?: string;
      duration?: string;
      level?: "Beginner" | "Intermediate" | "Advanced";
      description?: string;
      instructor?: string;
    };

    const data = await createCourse(body);
    return NextResponse.json({ data, message: "Course created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Failed to create course" },
      { status: 400 },
    );
  }
}
