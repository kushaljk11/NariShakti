"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/jobs", label: "Jobs" },
  { href: "/mentors", label: "Mentors" },
  { href: "/resources", label: "Resources" },
];

export function Navbar() {
  const pathname = usePathname();

  if (pathname === "/login") {
    return null;
  }

  return (
    <nav className="flex items-center justify-between border-b border-[#dde4df] bg-white px-4 py-3">
      <Link href="/" className="text-2xl font-extrabold text-[#16395b] no-underline">
        NariShakti
      </Link>
      <div className="flex gap-4">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="text-slate-700 no-underline hover:text-[#d62839]">
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
