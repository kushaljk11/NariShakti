import Link from "next/link";
import { DashboardCard } from "@/components/dashboard/DashboardCard";

export default function HomePage() {
  return (
    <section>
      <h1>NariShakti Platform</h1>
      <p>A unified Next.js full-stack app using App Router and feature modules.</p>
      <div className="grid" style={{ marginTop: "1rem" }}>
        <DashboardCard title="Courses" description="Skill-building courses" href="/courses" />
        <DashboardCard title="Jobs" description="Career opportunities" href="/jobs" />
        <DashboardCard title="Mentors" description="Find expert mentors" href="/mentors" />
        <DashboardCard title="Resources" description="Useful learning material" href="/resources" />
      </div>
      <p style={{ marginTop: "1rem" }}>
        Explore role dashboards: <Link href="/dashboard/learner">Learner</Link>
      </p>
    </section>
  );
}
