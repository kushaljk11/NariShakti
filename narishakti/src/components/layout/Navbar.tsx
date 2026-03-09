"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFemale } from "react-icons/fa";

const links = [
  { href: "/courses", label: "Programs" },
  { href: "/mentors", label: "Mentorship" },
  { href: "/resources", label: "Resources" },
  { href: "/scholarships", label: "Impact" },
];

export function Navbar() {
  const pathname = usePathname();

  if (pathname === "/login") {
    return null;
  }

  return (
    <nav className="flex items-center justify-between border-b border-[#e5e7eb] bg-[#f9f9f9] px-5 py-3">
      <Link href="/" className="flex items-center gap-2 text-3xl font-extrabold text-(--primary) no-underline">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-(--primary) text-sm text-white">
          <FaFemale />
        </span>
        <span className="text-3xl font-bold leading-none">NariShakti</span>
      </Link>
      <div className="flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-base font-medium text-slate-800 no-underline transition hover:text-(--primary)"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/register"
          className="rounded-2xl bg-(--primary) px-6 py-2 text-base font-semibold text-white no-underline shadow-sm transition hover:bg-(--primary-hover)"
        >
          Join Now
        </Link>
      </div>
    </nav>
  );
}
