export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export interface Course {
  id: string;
  title: string;
  duration: string;
  level: CourseLevel;
  description?: string;
  instructor?: string;
  created_at: string;
  updated_at: string;
}

export interface CreateCourseInput {
  title?: string;
  duration?: string;
  level?: CourseLevel;
  description?: string;
  instructor?: string;
}

export interface UpdateCourseInput {
  title?: string;
  duration?: string;
  level?: CourseLevel;
  description?: string;
  instructor?: string;
}
