import { NextResponse } from "next/server";
import { listJobs } from "@/features/jobs/job.service";

export async function GET() {
  const data = await listJobs();
  return NextResponse.json({ data });
}
