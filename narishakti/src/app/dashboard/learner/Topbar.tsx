import { FaBell, FaSearch } from "react-icons/fa";

export default function Topbar() {
  return (
    <header className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative w-full sm:max-w-xl">
        <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search for courses, mentors, or jobs..."
          className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-4 text-sm text-slate-700 outline-none ring-red-200 transition focus:border-red-400 focus:bg-white focus:ring-2"
        />
      </div>

      <div className="flex items-center gap-3 self-end sm:self-auto">
        <button className="relative grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50">
          <FaBell className="h-4 w-4" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
        </button>
        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-1">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-linear-to-br from-[#ff8e9d] to-[#e53a4e] text-sm font-bold text-white">
            RK
          </div>
          <div className="pr-2 text-right">
            <p className="text-sm font-semibold text-slate-800">Rashu K</p>
            <p className="text-[11px] uppercase tracking-wider text-slate-400">Learner</p>
          </div>
        </div>
      </div>
    </header>
  );
}
