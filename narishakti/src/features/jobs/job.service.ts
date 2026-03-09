import type { Job } from "@/types/job";

export async function listJobs(): Promise<Job[]> {
  return [
    { id: "j1", title: "Frontend Developer", company: "NariTech" },
    { id: "j2", title: "Program Coordinator", company: "SheLeads Org" },
  ];
}
