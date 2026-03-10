"use client";

import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import { useState } from "react";
import {
	FaBookmark,
	FaBriefcase,
	FaFilter,
	FaGift,
	FaRegClock,
	FaRegFileAlt,
} from "react-icons/fa";

const jobs = [
	{
		title: "Junior UI Developer",
		company: "TechNova Systems",
		location: "Pune, MH",
		salary: "₹6 - 9 LPA",
		tag: "New",
		time: "2 hours ago",
		active: true,
	},
	{
		title: "Data Analyst Intern",
		company: "GreenGrid Energy",
		location: "Remote",
		salary: "₹25k - 35k /mo",
		tag: "Open",
		time: "1 day ago",
		active: false,
	},
	{
		title: "Associate UX Designer",
		company: "Creative Pulse",
		location: "Bangalore",
		salary: "₹5 - 8 LPA",
		tag: "Open",
		time: "3 days ago",
		active: false,
	},
];

const applicationHistory = [
	{
		role: "UX Intern @ CloudScale",
		submitted: "Submitted on Oct 12, 2023",
		status: "Interview Scheduled",
		next: "Technical Round: Tomorrow, 2:00 PM",
		action: "Join Meeting",
		color: "bg-emerald-500",
	},
	{
		role: "Junior Product Manager @ FinFlow",
		submitted: "Submitted on Oct 10, 2023",
		status: "Under Review",
		color: "bg-rose-500",
	},
	{
		role: "Digital Marketing Learner @ GrowWise",
		submitted: "Submitted on Oct 05, 2023",
		status: "Closed",
		color: "bg-slate-300",
	},
];

export default function LearnerJobsScholarshipPage() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const selectedJob = jobs[0];

	return (
		<div className="min-h-screen overflow-x-hidden bg-[#f3f3f6] text-slate-900">
			{isSidebarOpen ? (
				<button
					type="button"
					onClick={() => setIsSidebarOpen(false)}
					aria-label="Close sidebar overlay"
					className="fixed inset-0 z-30 bg-black/35 lg:hidden"
				/>
			) : null}

			<div className="mx-auto flex w-full max-w-375">
				<Sidebar
					activeLabel="Jobs & Scholarships"
					mobileOpen={isSidebarOpen}
					onClose={() => setIsSidebarOpen(false)}
				/>

				<main className="min-w-0 flex-1 p-3 sm:p-6 lg:p-8">
					<Topbar onMenuClick={() => setIsSidebarOpen(true)} />

					<section className="mt-6 grid gap-5 xl:grid-cols-[0.95fr_1.95fr]">
						<aside className="space-y-4">
							<article className="rounded-3xl border border-slate-200 bg-white p-4">
								<h2 className="text-sm font-bold text-slate-700">Tracking Status</h2>
								<div className="mt-3 grid grid-cols-3 gap-2 text-center">
									<div className="rounded-2xl bg-rose-50 p-2">
										<p className="text-xl font-bold text-[#e53a4e]">12</p>
										<p className="text-[10px] uppercase tracking-wider text-slate-500">Applied</p>
									</div>
									<div className="rounded-2xl bg-blue-50 p-2">
										<p className="text-xl font-bold text-blue-600">4</p>
										<p className="text-[10px] uppercase tracking-wider text-slate-500">Interviews</p>
									</div>
									<div className="rounded-2xl bg-emerald-50 p-2">
										<p className="text-xl font-bold text-emerald-600">2</p>
										<p className="text-[10px] uppercase tracking-wider text-slate-500">Offers</p>
									</div>
								</div>
							</article>

							<article className="rounded-3xl border border-slate-200 bg-white p-3">
								<div className="mb-2 flex items-center justify-between px-1">
									<h3 className="font-semibold text-slate-900">Recommended for You</h3>
									<button className="cursor-pointer text-xs font-semibold text-[#e53a4e]">
										<FaFilter className="mr-1 inline h-2.5 w-2.5" />
										Filters
									</button>
								</div>

								<div className="space-y-2.5">
									{jobs.map((job) => (
										<button
											key={job.title}
											className={`w-full cursor-pointer rounded-2xl border p-3 text-left transition ${
												job.active
													? "border-[#e53a4e] bg-rose-50/40 shadow-sm"
													: "border-slate-200 bg-white hover:border-rose-200"
											}`}
										>
											<div className="flex items-start justify-between gap-2">
												<div>
													<p className="font-semibold text-slate-900">{job.title}</p>
													<p className="text-xs text-slate-500">
														{job.company} • {job.location}
													</p>
												</div>
												<span className="rounded-full bg-rose-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#e53a4e]">
													{job.tag}
												</span>
											</div>
											<div className="mt-2 flex items-center justify-between text-xs">
												<p className="font-semibold text-slate-700">{job.salary}</p>
												<p className="text-slate-400">{job.time}</p>
											</div>
										</button>
									))}
								</div>
							</article>
						</aside>

						<section className="space-y-4">
							<article className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
								<div className="h-24 bg-linear-to-r from-rose-100 via-rose-50 to-transparent" />
								<div className="p-5">
									<div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
										<div>
											<h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">{selectedJob.title}</h1>
											<p className="mt-1 text-[#e53a4e]">TechNova Systems • Pune (Hybrid) • Full-time</p>
										</div>
										<div className="flex items-center gap-2 sm:self-start">
											<button className="cursor-pointer rounded-full border border-slate-300 p-2 text-slate-500 hover:bg-slate-100">
												<FaBookmark className="h-3.5 w-3.5" />
											</button>
											<button className="cursor-pointer rounded-full bg-[#e53a4e] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#cb2639]">
												Apply Now
											</button>
										</div>
									</div>

									<div className="mt-5 grid gap-3 sm:grid-cols-4">
										<Info label="Salary Range" value="₹6L - ₹9L PA" />
										<Info label="Experience" value="0 - 2 Years" />
										<Info label="Applicants" value="124 People" />
										<Info label="Role Focus" value="Frontend" />
									</div>

									<div className="mt-6 rounded-2xl bg-slate-50 p-4">
										<h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
											<FaRegFileAlt className="h-4 w-4 text-[#e53a4e]" />
											About the Role
										</h2>
										<p className="mt-2 text-sm leading-7 text-slate-600">
											Tech Nova Systems is looking for a passionate Junior UI Developer to join our growing product
											team in Pune. You will work closely with UX designers and backend engineers to build seamless
											interfaces and improve accessibility.
										</p>

										<h3 className="mt-4 font-semibold text-slate-900">Key Responsibilities</h3>
										<ul className="mt-2 space-y-1 text-sm text-slate-600">
											<li>Develop user-facing features using React and Tailwind CSS.</li>
											<li>Build reusable components and maintain design consistency.</li>
											<li>Collaborate with designers to translate UI/UX into production-ready screens.</li>
											<li>Optimize applications for speed, accessibility, and performance.</li>
										</ul>

										<h3 className="mt-4 font-semibold text-slate-900">Requirements</h3>
										<div className="mt-2 flex flex-wrap gap-2">
											{["React.js", "Tailwind CSS", "JavaScript (ES6+)", "Responsive Design", "Figma"].map((item) => (
												<span key={item} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600">
													{item}
												</span>
											))}
										</div>
									</div>
								</div>
							</article>

							<article className="rounded-3xl border border-slate-200 bg-white p-5">
								<h2 className="text-2xl font-semibold text-slate-900">Recent Application History</h2>
								<div className="mt-4 space-y-4">
									{applicationHistory.map((entry) => (
										<div key={entry.role} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
											<div className="flex items-start justify-between gap-3">
												<div className="flex items-start gap-3">
													<span className={`mt-1 h-2.5 w-2.5 rounded-full ${entry.color}`} />
													<div>
														<p className="font-semibold text-slate-900">{entry.role}</p>
														<p className="text-xs text-slate-500">{entry.submitted}</p>
													</div>
												</div>
												<span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
													{entry.status}
												</span>
											</div>

											{entry.next ? (
												<div className="mt-3 flex items-center justify-between rounded-xl bg-white px-3 py-2 text-sm">
													<p className="flex items-center gap-2 text-slate-600">
														<FaRegClock className="h-3.5 w-3.5" />
														{entry.next}
													</p>
													<button className="cursor-pointer font-semibold text-[#e53a4e] hover:text-[#cb2639]">
														{entry.action}
													</button>
												</div>
											) : null}
										</div>
									))}
								</div>
							</article>
						</section>
					</section>

					<footer className="mt-8 border-t border-slate-200 pt-5 text-center text-xs text-slate-400">
						<p>© 2023 NariShakti Portal. Empowering women through technology and career growth.</p>
						<div className="mt-2 flex justify-center gap-4">
							<button className="cursor-pointer hover:text-slate-600">Support</button>
							<button className="cursor-pointer hover:text-slate-600">Privacy Policy</button>
							<button className="cursor-pointer hover:text-slate-600">Guidelines</button>
						</div>
					</footer>
				</main>
			</div>
		</div>
	);
}

type InfoProps = {
	label: string;
	value: string;
};

function Info({ label, value }: InfoProps) {
	return (
		<div>
			<p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{label}</p>
			<p className="mt-1 font-semibold text-slate-800">{value}</p>
		</div>
	);
}
