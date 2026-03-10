import Link from "next/link";
import Sidebar, { SidebarMobileNav } from "./Sidebar";
import Topbar from "./Topbar";
import {
  FaBook,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaLink,
  FaPlayCircle,
  FaTrophy,
} from "react-icons/fa";

const metrics = [
  {
    label: "Courses in Progress",
    value: "2",
    icon: FaBook,
    iconClass: "bg-blue-100 text-blue-600",
  },
  {
    label: "Completed",
    value: "1",
    icon: FaCheckCircle,
    iconClass: "bg-emerald-100 text-emerald-600",
  },
  {
    label: "Certificates",
    value: "1",
    icon: FaTrophy,
    iconClass: "bg-amber-100 text-amber-600",
  },
];

const recommendedCourses = [
  {
    title: "Digital Literacy",
    meta: "4h 20m   1.2k learners",
    gradient: "from-slate-900 to-teal-700",
  },
  {
    title: "Business Management",
    meta: "8h 15m   850 learners",
    gradient: "from-emerald-900 to-cyan-700",
  },
];

export default function LearnerDashboardPage() {
  return (
    <div className="min-h-screen bg-[#f3f3f6] text-slate-900">
      <div className="mx-auto flex max-w-375">
        <Sidebar activeLabel="Dashboard" />

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Topbar />

          <SidebarMobileNav activeLabel="Dashboard" />

          <section className="mt-2">
            <h1 className="text-4xl font-semibold text-slate-900">Namaste, Kushu!</h1>
            <p className="mt-1 text-slate-500">Ready to continue your journey today?</p>
          </section>

          <section className="mt-5 grid gap-4 md:grid-cols-3">
            {metrics.map(({ label, value, icon: Icon, iconClass }) => (
              <article key={label} className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">{label}</p>
                    <p className="mt-2 text-3xl font-semibold text-slate-800">{value}</p>
                  </div>
                  <span className={`grid h-10 w-10 place-items-center rounded-xl ${iconClass}`}>
                    <Icon className="h-4 w-4" />
                  </span>
                </div>
              </article>
            ))}
          </section>

          <section className="mt-6 grid gap-5 xl:grid-cols-[1.9fr_1fr]">
            <div>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-slate-900">Continue Learning</h2>
                <Link href="#" className="text-sm font-semibold text-[#e53a4e]">
                  View All
                </Link>
              </div>

              <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white md:grid md:grid-cols-[1fr_1.6fr]">
                <div className="h-52 bg-[radial-gradient(circle_at_top_left,#0f172a,#1e293b_45%,#334155)] md:h-auto" />

                <div className="p-5">
                  <span className="rounded-full bg-rose-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#e53a4e]">
                    Skill Development
                  </span>
                  <h3 className="mt-3 text-3xl font-semibold text-slate-900">Advanced Tailoring</h3>
                  <p className="mt-2 text-sm text-slate-500">
                    Module 4: Pattern making for traditional ethnic wear.
                  </p>

                  <div className="mt-4 flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>65% Complete</span>
                    <span>12/18 Lessons</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-slate-100">
                    <div className="h-2 w-[65%] rounded-full bg-[#e53a4e]" />
                  </div>

                  <button className="mt-5 inline-flex items-center cursor-pointer gap-2 rounded-full bg-[#e53a4e] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#c5273a]">
                    <FaPlayCircle className="h-4 w-4" />
                    Resume Lesson
                  </button>
                </div>
              </article>

              <div className="mt-6">
                <h2 className="mb-3 text-2xl font-semibold text-slate-900">Recommended for You</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {recommendedCourses.map((course) => (
                    <article key={course.title} className="rounded-2xl border border-slate-200 bg-white p-3">
                      <div className={`h-28 rounded-xl bg-linear-to-br ${course.gradient}`} />
                      <h3 className="mt-3 text-lg font-semibold text-slate-900">{course.title}</h3>
                      <p className="mt-1 text-xs text-slate-500">{course.meta}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900">Upcoming Session</h2>
              <article className="rounded-3xl bg-[radial-gradient(circle_at_top_left,#45203f,#1b2048_50%,#0f1a37)] p-5 text-white shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-white/20 font-semibold">P</div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-rose-200">Mentor</p>
                    <p className="text-xl font-bold">Dr. Priya Sharma</p>
                  </div>
                </div>

                <div className="mt-5 space-y-2 text-sm text-slate-200">
                  <p className="flex items-center gap-2">
                    <FaCalendarAlt className="h-4 w-4 text-rose-300" />
                    October 24, 2023
                  </p>
                  <p className="flex items-center gap-2">
                    <FaClock className="h-4 w-4 text-rose-300" />
                    02:00 PM - 03:00 PM
                  </p>
                </div>

                <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 font-semibold text-slate-800 transition hover:bg-slate-100">
                  <FaLink className="h-3.5 w-3.5" />
                  Join Session Link
                </button>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-lg font-bold text-slate-900">Daily Motivation</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  "When women support each other, incredible things happen. Every lesson you complete is a step
                  toward your own NariShakti."
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Community Forum</p>
              </article>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
