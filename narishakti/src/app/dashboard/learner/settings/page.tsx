"use client";

import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import { useState } from "react";
import {
  FaCamera,
  FaChevronDown,
  FaEnvelope,
  FaLock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShieldAlt,
  FaTrophy,
  FaUser,
} from "react-icons/fa";
import type { ReactNode } from "react";

export default function LearnerSettingsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
          activeLabel="Settings"
          mobileOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <main className="min-w-0 flex-1 p-3 sm:p-6 lg:p-8">
          <Topbar onMenuClick={() => setIsSidebarOpen(true)} />

          <section className="mt-2">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">My Profile</h1>
                <p className="mt-1 text-slate-500">Update your details and how others see you on the platform.</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-xl border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">
                  Cancel
                </button>
                <button className="rounded-xl bg-[#e53a4e] px-5 py-2 text-sm font-semibold text-white hover:bg-[#cb2639]">
                  Save Changes
                </button>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-4 sm:p-6">
              <div className="flex flex-wrap items-center gap-4">
                <div className="relative">
                  <div className="grid h-24 w-24 place-items-center rounded-full bg-linear-to-br from-[#f8c6a2] to-[#f59f8d] text-3xl font-bold text-[#5f3a2a]">
                    A
                  </div>
                  <button className="absolute bottom-0 right-0 grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-[#2f6f95] text-white">
                    <FaCamera className="h-3 w-3" />
                  </button>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Rashu K</h2>
                  <p className="mt-1 text-slate-500">Learner since October 2023 • 12 Courses Completed</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-700">
                      Business Analyst
                    </span>
                    <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rose-700">
                      Top 5% Learner
                    </span>
                  </div>
                </div>

                <button className="ml-auto rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200">
                  View Public Profile
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-4 xl:grid-cols-[2fr_1fr]">
              <div className="space-y-4">
                <section className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-5">
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
                    <FaUser className="h-4 w-4 text-[#e53a4e]" />
                    Personal Information
                  </h3>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <InputBlock label="First Name" value="Rashu" />
                    <InputBlock label="Last Name" value="K" />
                  </div>

                  <div className="mt-4">
                    <InputBlock label="Email Address" value="rashu.k@example.com" icon={<FaEnvelope />} />
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <InputBlock label="Phone Number" value="+91 98765 43210" icon={<FaPhoneAlt />} />
                    <InputBlock
                      label="Location"
                      value="Mumbai, India"
                      icon={<FaMapMarkerAlt />}
                      rightIcon={<FaChevronDown className="text-slate-400" />}
                    />
                  </div>
                </section>

                <section className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-5">
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
                    <FaTrophy className="h-4 w-4 text-[#2f6f95]" />
                    Bio & Professional Summary
                  </h3>

                  <label className="mt-4 block text-sm font-semibold text-slate-700">Short Bio</label>
                  <textarea
                    className="mt-2 h-36 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 outline-none ring-red-200 transition focus:border-red-400 focus:bg-white focus:ring-2"
                    defaultValue="I am a passionate lifelong learner focusing on digital marketing and business leadership. Currently working as a junior associate and looking to transition into a management role."
                  />
                  <p className="mt-2 text-right text-xs text-slate-400">Character count: 245/500</p>
                </section>
              </div>

              <div className="space-y-4">
                <section className="rounded-3xl bg-[#2f6f95] p-5 text-white">
                  <h3 className="text-lg font-semibold">Learning Progress</h3>
                  <div className="mt-4 space-y-3 text-sm">
                    <ProgressRow label="Leadership Essentials" value={85} />
                    <ProgressRow label="Financial Literacy" value={42} />
                  </div>
                  <button className="mt-5 w-full rounded-full bg-white/15 px-4 py-2 font-semibold hover:bg-white/25">
                    Continue Learning
                  </button>
                </section>

                <section className="rounded-3xl border border-slate-200 bg-white p-5">
                  <h3 className="text-2xl font-semibold text-slate-900">Security</h3>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                      <p className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                        <FaLock className="h-3.5 w-3.5" /> Password
                      </p>
                      <button className="text-xs font-bold uppercase tracking-wider text-[#e53a4e]">Update</button>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                      <p className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                        <FaShieldAlt className="h-3.5 w-3.5" /> 2FA
                      </p>
                      <button className="relative h-5 w-10 rounded-full bg-rose-200">
                        <span className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-[#e53a4e]" />
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

type InputBlockProps = {
  label: string;
  value: string;
  icon?: ReactNode;
  rightIcon?: ReactNode;
};

function InputBlock({ label, value, icon, rightIcon }: InputBlockProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700">{label}</label>
      <div className="mt-2 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700">
        <span className="flex items-center gap-2">
          {icon ? <span className="text-slate-400">{icon}</span> : null}
          {value}
        </span>
        {rightIcon ? rightIcon : null}
      </div>
    </div>
  );
}

type ProgressRowProps = {
  label: string;
  value: number;
};

function ProgressRow({ label, value }: ProgressRowProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p>{label}</p>
        <p>{value}%</p>
      </div>
      <div className="mt-1 h-2 rounded-full bg-white/25">
        <div className="h-2 rounded-full bg-white" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
