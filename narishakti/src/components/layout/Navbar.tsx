"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaFemale, FaTimes } from "react-icons/fa";

const links = [
  { href: "/courses", label: "Programs" },
  { href: "/mentors", label: "Mentorship" },
  { href: "/resources", label: "Resources" },
  { href: "/scholarships", label: "Impact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (pathname === "/login") {
    return null;
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-[#e5e7eb] bg-[#f9f9f9] px-4 py-3 sm:px-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-3xl font-extrabold text-(--primary) no-underline">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-(--primary) text-sm text-white">
            <FaFemale />
          </span>
          <span className="text-2xl font-bold leading-none sm:text-3xl">NariShakti</span>
        </Link>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="grid h-10 w-10 cursor-pointer place-items-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="hidden items-center gap-8 md:flex">
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
      </div>

      {isMenuOpen ? (
        <>
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu overlay"
            className="fixed inset-0 bg-black/35 md:hidden"
          />

          <div className="fixed right-0 top-0 z-50 h-screen w-72 border-l border-slate-200 bg-white p-5 shadow-xl md:hidden">
            <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
              <p className="text-lg font-bold text-(--primary)">Menu</p>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="grid h-9 w-9 cursor-pointer place-items-center rounded-lg border border-slate-200 text-slate-700"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg px-2 py-2 text-base font-medium text-slate-800 no-underline transition hover:bg-slate-100 hover:text-(--primary)"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/register"
                onClick={() => setIsMenuOpen(false)}
                className="mt-1 rounded-xl bg-(--primary) px-4 py-2 text-center text-base font-semibold text-white no-underline shadow-sm transition hover:bg-(--primary-hover)"
              >
                Join Now
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </nav>
  );
}
