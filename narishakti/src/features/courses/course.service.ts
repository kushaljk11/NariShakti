import type { Course } from "@/types/course";

export async function listCourses(): Promise<Course[]> {
  return [
    { id: "c1", title: "Web Development Basics", level: "Beginner" },
    { id: "c2", title: "Data Analysis with Python", level: "Intermediate" },
  ];
}
