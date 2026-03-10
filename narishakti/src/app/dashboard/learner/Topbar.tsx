"use client";

import { FaBars, FaBell, FaSearch } from "react-icons/fa";

type TopbarProps = {
  onMenuClick?: () => void;
};

export default function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="rounded-2xl border border-slate-200 bg-white p-3 sm:p-4">
      <div className="flex w-full min-w-0 items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="grid h-10 w-10 shrink-0 cursor-pointer place-items-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 lg:hidden"
          aria-label="Open sidebar menu"
        >
          <FaBars className="h-4 w-4" />
        </button>

        <div className="relative min-w-0 flex-1 lg:max-w-xl">
          <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search for courses, mentors, or jobs..."
            className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-4 text-sm text-slate-700 outline-none ring-red-200 transition focus:border-red-400 focus:bg-white focus:ring-2"
          />
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <button className="relative grid h-9 w-9 shrink-0 cursor-pointer place-items-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50">
            <FaBell className="h-4 w-4" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
          </button>

          <div className="flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-1">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-linear-to-br from-[#ff8e9d] to-[#e53a4e] text-sm font-bold text-white">
              RK
            </div>
            <div className="hidden pr-2 text-right md:block">
              <p className="text-sm font-semibold text-slate-800">Rashu K</p>
              <p className="text-[11px] uppercase tracking-wider text-slate-400">Learner</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
