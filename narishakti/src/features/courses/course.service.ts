import { connectDb } from "@/lib/db";
import { CourseModel } from "@/lib/models/course.model";
import type { Course, CreateCourseInput, UpdateCourseInput } from "@/types/course";

function normalizeCourse(doc: {
  _id: { toString: () => string };
  title: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  description?: string;
  instructor?: string;
  created_at: Date;
  updated_at: Date;
}): Course {
  return {
    id: doc._id.toString(),
    title: doc.title,
    duration: doc.duration,
    level: doc.level,
    description: doc.description ?? "",
    instructor: doc.instructor ?? "",
    created_at: doc.created_at.toISOString(),
    updated_at: doc.updated_at.toISOString(),
  };
}

export async function listCourses(): Promise<Course[]> {
  await connectDb();
  const docs = await CourseModel.find({}).sort({ created_at: -1 });
  return docs.map((doc) => normalizeCourse(doc));
}

export async function getCourseById(id: string): Promise<Course> {
  if (!id) {
    throw new Error("Course id is required");
  }

  await connectDb();
  const doc = await CourseModel.findById(id);

  if (!doc) {
    throw new Error("Course not found");
  }

  return normalizeCourse(doc);
}

export async function createCourse(input: CreateCourseInput): Promise<Course> {
  const title = input.title?.trim();
  const duration = input.duration?.trim();

  if (!title) {
    throw new Error("Title is required");
  }

  if (!duration) {
    throw new Error("Duration is required");
  }

  await connectDb();

  const created = await CourseModel.create({
    title,
    duration,
    level: input.level ?? "Beginner",
    description: input.description?.trim() ?? "",
    instructor: input.instructor?.trim() ?? "",
  });

  return normalizeCourse(created);
}

export async function updateCourse(id: string, input: UpdateCourseInput): Promise<Course> {
  if (!id) {
    throw new Error("Course id is required");
  }

  const updates: UpdateCourseInput = {};

  if (typeof input.title === "string") {
    updates.title = input.title.trim();
  }

  if (typeof input.duration === "string") {
    updates.duration = input.duration.trim();
  }

  if (typeof input.level === "string") {
    updates.level = input.level;
  }

  if (typeof input.description === "string") {
    updates.description = input.description.trim();
  }

  if (typeof input.instructor === "string") {
    updates.instructor = input.instructor.trim();
  }

  if (Object.keys(updates).length === 0) {
    throw new Error("At least one field is required to update");
  }

  await connectDb();

  const updated = await CourseModel.findByIdAndUpdate(id, updates, {
    new: true,
    runValidators: true,
  });

  if (!updated) {
    throw new Error("Course not found");
  }

  return normalizeCourse(updated);
}

export async function deleteCourse(id: string): Promise<void> {
  if (!id) {
    throw new Error("Course id is required");
  }

  await connectDb();
  const deleted = await CourseModel.findByIdAndDelete(id);

  if (!deleted) {
    throw new Error("Course not found");
  }
}
