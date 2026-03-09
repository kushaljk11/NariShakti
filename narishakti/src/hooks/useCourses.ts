"use client";

import { useEffect, useState } from "react";
import type { Course } from "@/types/course";

export function useCourses() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const load = async () => {
      const response = await fetch("/api/courses");
      const json = (await response.json()) as { data: Course[] };
      setCourses(json.data ?? []);
    };

    void load();
  }, []);

  return courses;
}
