"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaBook,
  FaBriefcase,
  FaCog,
  FaComments,
  FaTimes,
  FaHeartbeat,
  FaThLarge,
  FaUsers,
} from "react-icons/fa";
import { IconType } from "react-icons";
import logoImage from "@/uploads/logo.png";

type SidebarItem = {
  label: string;
  icon: IconType;
  href: string;
};

type SidebarProps = {
  activeLabel?: string;
  mobileOpen?: boolean;
  onClose?: () => void;
};

const sidebarItems: SidebarItem[] = [
  { label: "Dashboard", icon: FaThLarge, href: "/dashboard/learner" },
  { label: "My Courses", icon: FaBook, href: "/dashboard/learner/mycourse" },
  { label: "Mentorship", icon: FaUsers, href: "/dashboard/learner/mentor" },
  { label: "Jobs & Scholarships", icon: FaBriefcase, href: "/dashboard/learner/job&scholarship" },
  { label: "Health Resources", icon: FaHeartbeat, href: "/dashboard/learner/health&safety" },
  { label: "Community Forum", icon: FaComments, href: "/dashboard/learner" },
  { label: "Settings", icon: FaCog, href: "/dashboard/learner/settings" },
];

export default function Sidebar({ activeLabel = "Dashboard", mobileOpen = false, onClose }: SidebarProps) {
  const renderLinks = (isMobile: boolean) =>
    sidebarItems.map(({ label, icon: Icon, href }) => (
      <Link
        key={label}
        href={href}
        onClick={isMobile ? onClose : undefined}
        className={`cursor-pointer flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
          activeLabel === label
            ? "bg-[#e53a4e] text-white"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        }`}
      >
        <Icon className="h-4 w-4" />
        {label}
      </Link>
    ));

  return (
    <>
      <aside className="hidden h-screen w-64 shrink-0 overflow-y-auto border-r border-slate-200 bg-white lg:sticky lg:top-0 lg:flex lg:flex-col">
        <div className="flex items-center gap-1 px-4 pb-6 pt-6">
          <Image src={logoImage} alt="NariShakti" priority className="h-18 w-18 object-contain" />
          <div>
            <p className="text-2xl font-semibold leading-tight text-slate-900">
              Nari<span className="text-[#e53a4e]">Shakti</span>
            </p>
          </div>
        </div>

        <nav className="space-y-1 px-4">{renderLinks(false)}</nav>

        <div className="mt-auto p-4">
          <div className="rounded-2xl border border-rose-100 bg-rose-50 p-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#e53a4e]">Upgrade to Pro</p>
            <p className="mt-2 text-xs text-slate-600">Access exclusive mentorship and advanced paths.</p>
            <button className="mt-4 w-full cursor-pointer rounded-full bg-[#e53a4e] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#c5273a]">
              Upgrade Plan
            </button>
          </div>
        </div>
      </aside>

      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-72 max-w-full overflow-y-auto border-r border-slate-200 bg-white p-4 transition-transform duration-200 lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <Image src={logoImage} alt="NariShakti" priority className="h-12 w-12 object-contain" />
            <p className="text-xl font-semibold text-slate-900">
              Nari<span className="text-[#e53a4e]">Shakti</span>
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-9 w-9 cursor-pointer place-items-center rounded-lg border border-slate-200 text-slate-700"
            aria-label="Close sidebar"
          >
            <FaTimes className="h-4 w-4" />
          </button>
        </div>

        <nav className="mt-4 space-y-1">{renderLinks(true)}</nav>
      </aside>
    </>
  );
}

