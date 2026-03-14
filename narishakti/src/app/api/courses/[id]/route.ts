import { NextResponse } from "next/server";
import { deleteCourse, getCourseById, updateCourse } from "@/features/courses/course.service";

type RouteParams = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, context: RouteParams) {
  try {
    const { id } = await context.params;
    const data = await getCourseById(id);
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to fetch course";
    const status = message === "Course not found" ? 404 : 400;
    return NextResponse.json({ message }, { status });
  }
}

export async function PUT(request: Request, context: RouteParams) {
  try {
    const { id } = await context.params;
    const body = (await request.json()) as {
      title?: string;
      duration?: string;
      level?: "Beginner" | "Intermediate" | "Advanced";
      description?: string;
      instructor?: string;
    };

    const data = await updateCourse(id, body);
    return NextResponse.json({ data, message: "Course updated" }, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to update course";
    const status = message === "Course not found" ? 404 : 400;
    return NextResponse.json({ message }, { status });
  }
}

export async function DELETE(_request: Request, context: RouteParams) {
  try {
    const { id } = await context.params;
    await deleteCourse(id);
    return NextResponse.json({ message: "Course deleted" }, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to delete course";
    const status = message === "Course not found" ? 404 : 400;
    return NextResponse.json({ message }, { status });
  }
}
