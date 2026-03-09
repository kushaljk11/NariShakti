import { listMentors } from "@/features/mentorship/mentorship.service";

export default async function MentorsPage() {
  const mentors = await listMentors();

  return (
    <section>
      <h1>Mentors</h1>
      <ul>
        {mentors.map((mentor) => (
          <li key={mentor.id}>{mentor.name}</li>
        ))}
      </ul>
    </section>
  );
}
