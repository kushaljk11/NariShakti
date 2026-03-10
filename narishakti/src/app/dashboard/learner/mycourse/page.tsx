import Sidebar, { SidebarMobileNav } from "../Sidebar";
import Topbar from "../Topbar";
import { FaArrowRight, FaBell, FaSearch, FaStar } from "react-icons/fa";

type CourseCard = {
  title: string;
  subtitle: string;
  status?: "In Progress" | "Enrolled" | "New Release";
  progress?: number;
  cta: string;
  duration: string;
  color: string;
};

const filters = [
  "All Courses",
  "Digital Skills",
  "Tailoring",
  "Beautician",
  "Financial Literacy",
];

const courses: CourseCard[] = [
  {
    title: "Digital Literacy for Small Business",
    subtitle: "Learn how to manage your business online...",
    status: "In Progress",
    progress: 65,
    cta: "Continue Learning",
    duration: "16 Hours",
    color: "from-sky-900 to-slate-700",
  },
  {
    title: "Advanced Tailoring & Design",
    subtitle: "Master the art of garment construction and modern...",
    status: "Enrolled",
    progress: 12,
    cta: "Continue Learning",
    duration: "20 Hours",
    color: "from-emerald-900 to-zinc-700",
  },
  {
    title: "Financial Independence 101",
    subtitle: "Understanding savings, loans, and investment...",
    status: "New Release",
    cta: "Enroll Now",
    duration: "12 Hours",
    color: "from-cyan-600 to-sky-300",
  },
  {
    title: "Professional Beautician Course",
    subtitle: "Complete guide to makeup, skincare, and...",
    cta: "Enroll Now",
    duration: "24 Hours",
    color: "from-amber-300 to-orange-100",
  },
  {
    title: "Women Entrepreneurship",
    subtitle: "How to start, scale and sustain your own startup...",
    cta: "Enroll Now",
    duration: "18 Hours",
    color: "from-emerald-900 to-slate-700",
  },
  {
    title: "Introduction to Coding",
    subtitle: "Learn HTML, CSS and JS basics to start your...",
    cta: "Enroll Now",
    duration: "30 Hours",
    color: "from-zinc-950 to-slate-700",
  },
];

const recommendations = [
  "Graphic Design Basics for Entrepreneurs",
  "Stock Market Essentials for Beginners",
];

export default function LearnerMyCoursePage() {
  return (
    <div className="min-h-screen bg-[#f3f3f6] text-slate-900">
      <div className="mx-auto flex max-w-375">
        <Sidebar activeLabel="My Courses" />

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Topbar />
          <SidebarMobileNav activeLabel="My Courses" />

          <div className="mt-2 grid gap-6 xl:grid-cols-[1.9fr_1fr]">
            <section>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h1 className="text-4xl font-semibold text-slate-900">
                    My Learning Journey
                  </h1>
                  <p className="mt-1 text-slate-500">
                    Master new skills and achieve independence.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-rose-500">
                  <button className="grid h-8 w-8 place-items-center rounded-full border border-rose-200 bg-rose-50">
                    <FaBell className="h-3.5 w-3.5" />
                  </button>
                  <button className="grid h-8 w-8 place-items-center rounded-full border border-rose-200 bg-rose-50">
                    <span className="h-3 w-3 rounded-sm border border-current" />
                  </button>
                </div>
              </div>

              <div className="relative mt-4">
                <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search for courses, skills, or mentors..."
                  className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-700 outline-none ring-red-200 transition focus:border-red-400 focus:ring-2"
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {filters.map((filter, idx) => (
                  <button
                    key={filter}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                      idx === 0
                        ? "bg-[#e53a4e] text-white"
                        : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
                {courses.map((course) => (
                  <article
                    key={course.title}
                    className="rounded-3xl border border-slate-200 bg-white p-3"
                  >
                    <div
                      className={`h-28 rounded-2xl bg-linear-to-br ${course.color}`}
                    />

                    <div className="mt-3">
                      {course.status ? (
                        <span className="rounded-full bg-rose-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[#e53a4e]">
                          {course.status}
                        </span>
                      ) : null}

                      <h2 className="mt-2 text-2xl leading-tight font-semibold text-slate-900">
                        {course.title}
                      </h2>
                      <p className="mt-1 text-xs text-slate-500">
                        {course.subtitle}
                      </p>

                      {course.progress !== undefined ? (
                        <div className="mt-3">
                          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500">
                            <span>Progress</span>
                            <span className="text-[#e53a4e]">
                              {course.progress}%
                            </span>
                          </div>
                          <div className="mt-1 h-1.5 rounded-full bg-slate-100">
                            <div
                              className="h-1.5 rounded-full bg-[#e53a4e]"
                              style={{ width: `${course.progress}%` }}
                            />
                          </div>
                        </div>
                      ) : (
                        <p className="mt-2 text-[11px] text-slate-400">
                          <FaStar className="mr-1 inline h-2.5 w-2.5 text-amber-400" />
                          4.8 (2.1k reviews)
                        </p>
                      )}

                      <div className="mt-3 flex items-end justify-between">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                          Duration
                          <br />
                          <span className="text-sm text-slate-700">
                            {course.duration}
                          </span>
                        </p>
                        <button className="rounded-xl bg-[#e53a4e] px-4 py-2 cursor-pointer text-xs font-bold text-white hover:bg-[#cb2639]">
                          {course.cta}
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-6 flex justify-center">
                <button className="inline-flex items-center gap-2 rounded-full border cursor-pointer border-rose-300 px-6 py-2.5 text-sm font-semibold text-[#e53a4e] hover:bg-rose-50">
                  Explore More Courses
                  <FaArrowRight className="h-3 w-3" />
                </button>
              </div>
            </section>

            <aside className="space-y-4">
              <section className="rounded-3xl border border-rose-100 bg-rose-50 p-4">
                <h3 className="text-lg font-semibold text-slate-900">
                  Daily Goal
                </h3>
                <div className="mt-3 flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full border-4 border-rose-400 bg-white text-xs font-bold text-[#e53a4e]">
                    75%
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">
                      Learning Streak
                    </p>
                    <p className="text-xs text-slate-500">
                      Complete one more lesson to reach your daily goal of 2
                      hours.
                    </p>
                  </div>
                </div>
              </section>

              <section className="rounded-3xl border border-slate-200 bg-white p-4">
                <h3 className="text-xl font-semibold text-slate-900">
                  Recommended for You
                </h3>
                <div className="mt-3 space-y-3">
                  {recommendations.map((item, idx) => (
                    <div key={item} className="flex items-center gap-3">
                      <div
                        className={`h-14 w-14 rounded-xl bg-linear-to-br ${
                          idx === 0
                            ? "from-emerald-700 to-cyan-500"
                            : "from-zinc-900 to-slate-700"
                        }`}
                      />
                      <div>
                        <p className="text-sm font-semibold text-slate-800">
                          {item}
                        </p>
                        <p className="text-[11px] text-[#e53a4e]">
                          Free Course
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl bg-[radial-gradient(circle_at_top_left,#1c2948,#111a33_50%,#0b1228)] p-5 text-white">
                <h3 className="text-2xl font-semibold">Join a Circle</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Connect with other women learners in your area.
                </p>
                <button className="mt-5 w-full cursor-pointer rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100">
                  Find Circles
                </button>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
