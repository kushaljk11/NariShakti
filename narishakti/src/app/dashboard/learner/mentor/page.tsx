import Sidebar, { SidebarMobileNav } from "../Sidebar";
import Topbar from "../Topbar";
import { FaCalendarAlt, FaClock, FaFilter, FaUserPlus } from "react-icons/fa";

type Mentor = {
  name: string;
  title: string;
  rating: string;
  sessions: string;
  tags: string[];
  bio: string;
  accent: string;
};

const mentors: Mentor[] = [
  {
    name: "Priya Sharma",
    title: "Sr. Product Manager at Google",
    rating: "4.9",
    sessions: "124 sessions",
    tags: ["Product Management", "Career Growth"],
    bio: "Helping women break into tech leadership and master product strategy.",
    accent: "from-rose-200 to-slate-300",
  },
  {
    name: "Ananya Verma",
    title: "Fullstack Developer at Tata",
    rating: "5.0",
    sessions: "89 sessions",
    tags: ["React", "System Design"],
    bio: "Passion for building scalable applications and teaching complex ideas simply.",
    accent: "from-emerald-200 to-cyan-200",
  },
  {
    name: "Meera Nair",
    title: "Founder & CEO, TechNest",
    rating: "4.8",
    sessions: "210 sessions",
    tags: ["Entrepreneurship", "Venture Capital"],
    bio: "Navigating the startup ecosystem as a female founder with practical insights.",
    accent: "from-amber-200 to-orange-200",
  },
];

const requests = [
  {
    mentor: "Sarah Jenkins",
    topic: "UI/UX Portfolio Review",
    date: "Oct 24, 2023",
    status: "Accepted",
    action: "Schedule",
  },
  {
    mentor: "Dr. Elena K.",
    topic: "Data Science Career Path",
    date: "Oct 26, 2023",
    status: "Pending",
    action: "Wait",
  },
];

const upcomingSessions = [
  {
    month: "OCT",
    day: "28",
    title: "Design Thinking Fundamentals",
    mentor: "with Sarah Jenkins",
    time: "10:00 AM - 11:00 AM (EST)",
    button: "Join Call",
    active: true,
  },
  {
    month: "NOV",
    day: "02",
    title: "Mock Interview Prep",
    mentor: "with Ananya Verma",
    time: "4:30 PM - 5:30 PM (EST)",
    button: "Reschedule",
    active: false,
  },
];

export default function LearnerMentorPage() {
  return (
    <div className="min-h-screen bg-[#f3f3f6] text-slate-900">
      <div className="mx-auto flex max-w-375">
        <Sidebar activeLabel="Mentorship" />

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Topbar />
          <SidebarMobileNav activeLabel="Mentorship" />

          <section className="mt-2">
            <h1 className="text-4xl font-semibold text-slate-900">Mentorship Hub</h1>
            <p className="mt-2 max-w-3xl text-slate-500">
              Connect with industry experts, get career guidance, and accelerate your learning journey with
              personalized 1:1 mentorship.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-5 border-b border-slate-200 pb-3 text-sm font-semibold">
              <button className="cursor-pointer border-b-2 border-[#e53a4e] pb-2 text-[#e53a4e]">
                <FaUserPlus className="mr-2 inline h-3.5 w-3.5" />
                Find a Mentor
              </button>
              <button className="cursor-pointer pb-2 text-slate-500 hover:text-slate-800">
                My Requests <span className="ml-1 rounded-full bg-slate-200 px-1.5 text-[10px]">3</span>
              </button>
              <button className="cursor-pointer pb-2 text-slate-500 hover:text-slate-800">
                <FaCalendarAlt className="mr-2 inline h-3.5 w-3.5" />
                Scheduled Sessions
              </button>
            </div>
          </section>

          <section className="mt-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-4xl font-semibold text-slate-900">Recommended for You</h2>
              <button className="cursor-pointer text-sm font-semibold text-[#e53a4e] hover:text-[#cb2639]">
                View all filters <FaFilter className="ml-1 inline h-3 w-3" />
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
              {mentors.map((mentor) => (
                <article key={mentor.name} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className={`h-14 w-14 rounded-2xl bg-linear-to-br ${mentor.accent}`} />
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-900">{mentor.name}</h3>
                      <p className="text-xs text-slate-500">{mentor.title}</p>
                      <p className="mt-1 text-xs text-amber-500">★ {mentor.rating} ({mentor.sessions})</p>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {mentor.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold text-indigo-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-3 line-clamp-2 text-sm text-slate-600">{mentor.bio}</p>

                  <button className="mt-4 w-full cursor-pointer rounded-xl bg-[#e53a4e] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#cb2639]">
                    Book a Session
                  </button>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-7">
            <h2 className="text-4xl font-semibold text-slate-900">Recent Mentorship Requests</h2>

            <div className="mt-4 overflow-x-auto rounded-3xl border border-slate-200 bg-white">
              <table className="w-full min-w-160 text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Mentor</th>
                    <th className="px-4 py-3">Topic</th>
                    <th className="px-4 py-3">Requested On</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((request) => (
                    <tr key={`${request.mentor}-${request.date}`} className="border-t border-slate-100">
                      <td className="px-4 py-3 font-semibold text-slate-800">{request.mentor}</td>
                      <td className="px-4 py-3 text-slate-600">{request.topic}</td>
                      <td className="px-4 py-3 text-slate-500">{request.date}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`rounded-full px-2 py-1 text-xs font-semibold ${
                            request.status === "Accepted"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {request.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <button
                          className={`cursor-pointer text-sm font-semibold ${
                            request.action === "Schedule"
                              ? "text-[#e53a4e] hover:text-[#cb2639]"
                              : "text-slate-400"
                          }`}
                        >
                          {request.action}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-7">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-4xl font-semibold text-slate-900">Upcoming Sessions</h2>
              <div className="rounded-full bg-slate-100 p-1 text-xs font-semibold">
                <button className="cursor-pointer rounded-full bg-white px-3 py-1 text-slate-700">List</button>
                <button className="cursor-pointer rounded-full px-3 py-1 text-slate-500">Calendar</button>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {upcomingSessions.map((session) => (
                <article
                  key={`${session.title}-${session.day}`}
                  className={`rounded-3xl border p-4 ${
                    session.active ? "border-rose-200 bg-white" : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl bg-slate-100 px-3 py-2 text-center">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{session.month}</p>
                        <p className="text-3xl font-semibold text-[#e53a4e]">{session.day}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{session.title}</h3>
                        <p className="text-sm text-slate-500">{session.mentor}</p>
                        <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                          <FaClock className="h-3 w-3" />
                          {session.time}
                        </p>
                      </div>
                    </div>

                    <button
                      className={`cursor-pointer rounded-full px-4 py-2 text-sm font-semibold ${
                        session.active
                          ? "bg-[#e53a4e] text-white hover:bg-[#cb2639]"
                          : "border border-slate-300 bg-white text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {session.button}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
