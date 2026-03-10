"use client";

import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import { useState } from "react";
import {
  FaBalanceScale,
  FaBookMedical,
  FaHandsHelping,
  FaHeartbeat,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShieldAlt,
  FaUserShield,
} from "react-icons/fa";

type ResourceCard = {
  title: string;
  description: string;
  cta: string;
  icon: React.ComponentType<{ className?: string }>;
};

const categories = [
  "All Resources",
  "Mental Health",
  "First Aid",
  "Safety Helplines",
  "Legal Rights",
];

const cards: ResourceCard[] = [
  {
    title: "Mental Wellness Toolkit",
    description:
      "Evidence-based strategies for managing stress, anxiety, and trauma recovery. Includes guided breathing exercises.",
    cta: "Explore Guide",
    icon: FaHeartbeat,
  },
  {
    title: "Emergency First Aid",
    description:
      "Step-by-step visual instructions for handling common medical emergencies until professional help arrives.",
    cta: "View Procedures",
    icon: FaBookMedical,
  },
  {
    title: "Safe Commute Tips",
    description:
      "Practical advice for staying safe while traveling alone, using public transport, or visiting new areas at night.",
    cta: "Safety Tips",
    icon: FaShieldAlt,
  },
  {
    title: "Know Your Rights",
    description:
      "Simplified legal information regarding harassment, workplace equality, and personal protection laws.",
    cta: "Read Rights Guide",
    icon: FaBalanceScale,
  },
  {
    title: "Support Networks",
    description:
      "Directory of local women's NGOs, support groups, and community outreach centers in your city.",
    cta: "Connect Now",
    icon: FaHandsHelping,
  },
  {
    title: "Digital Safety",
    description:
      "Protecting your digital footprint, managing privacy settings, and dealing with online harassment.",
    cta: "Secure Privacy",
    icon: FaUserShield,
  },
];

export default function LearnerHealthSafetyPage() {
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
          activeLabel="Health Resources"
          mobileOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <main className="min-w-0 flex-1 p-3 sm:p-6 lg:p-8">
          <Topbar onMenuClick={() => setIsSidebarOpen(true)} />

          <section className="mt-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e53a4e]">
              Empowerment Through Knowledge
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">
              Health & Safety Resources
            </h1>
            <p className="mt-3 max-w-3xl text-slate-500">
              Compassionate guides and vital tools designed to prioritize your
              well-being. Whether you need immediate help or long-term support,
              we are here.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {categories.map((item, idx) => (
                <button
                  key={item}
                  className={`cursor-pointer rounded-full px-4 py-2 text-xs font-semibold transition ${
                    idx === 0
                      ? "bg-[#e53a4e] text-white"
                      : "border border-rose-100 bg-rose-50 text-slate-600 hover:border-rose-200"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </section>

          <section className="mt-6 rounded-3xl bg-linear-to-r from-[#e53a4e] to-[#ef6472] p-6 text-white shadow-lg">
            <div className="grid gap-4 lg:grid-cols-[1.7fr_1fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold">Need Immediate Help?</h2>
                <p className="mt-2 text-rose-100">
                  Our 24/7 emergency response team and local helplines are
                  available right now. Your safety is confidential.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <button className="cursor-pointer rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#e53a4e] hover:bg-rose-50">
                    <FaPhoneAlt className="mr-1.5 inline h-3.5 w-3.5" />
                    Call SOS Helpline
                  </button>
                  <button className="cursor-pointer rounded-full border border-white/40 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">
                    <FaMapMarkerAlt className="mr-1.5 inline h-3.5 w-3.5" />
                    Find Safe Spaces Near Me
                  </button>
                </div>
              </div>

              <div className="hidden justify-self-end lg:block">
                <div className="grid h-32 w-32 place-items-center rounded-full bg-white/12">
                  <FaMapMarkerAlt className="h-10 w-10" />
                </div>
              </div>
            </div>
          </section>

          <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {cards.map(({ title, description, cta, icon: Icon }) => (
              <article
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-rose-50 text-[#e53a4e]">
                  <Icon className="h-4.5 w-4.5" />
                </span>

                <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {description}
                </p>
                <button className="mt-4 cursor-pointer text-sm font-bold uppercase tracking-wider text-[#e53a4e] hover:text-[#cb2639]">
                  {cta} →
                </button>
              </article>
            ))}
          </section>

          <section className="mt-10 border-t border-slate-200 pt-8 text-center">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl">
              Can&apos;t find what you&apos;re looking for?
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-500">
              Our database is updated weekly. Reach out to our resource team or
              use the chat assistant for specific inquiries.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <button className="cursor-pointer rounded-xl bg-[#0e1834] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#111f45]">
                Contact Support
              </button>
              <button className="cursor-pointer rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100">
                Suggest a Resource
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
