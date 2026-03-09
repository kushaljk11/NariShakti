import { listCourses } from "@/features/courses/course.service";

export default async function CoursesPage() {
  const courses = await listCourses();

  return (
    <section>
      <h1>Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </section>
  );
}
