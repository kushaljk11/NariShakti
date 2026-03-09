import { listJobs } from "@/features/jobs/job.service";

export default async function JobsPage() {
  const jobs = await listJobs();

  return (
    <section>
      <h1>Jobs</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            {job.title} - {job.company}
          </li>
        ))}
      </ul>
    </section>
  );
}
