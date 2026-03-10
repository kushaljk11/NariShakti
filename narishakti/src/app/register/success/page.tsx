import Link from "next/link";

type SuccessPageProps = {
  searchParams: Promise<{ name?: string }>;
};

export default async function RegisterSuccessPage({ searchParams }: SuccessPageProps) {
  const params = await searchParams;
  const firstName = (params.name ?? "Friend").split(" ")[0];

  return (
    <section className="px-4 pb-12 pt-6">
      <div className="mx-auto max-w-245 text-center">
        <div className="relative mb-4 h-55 rounded-2xl bg-[radial-gradient(circle_at_20%_30%,#5a6f7d,#2a473f_58%,#172423_100%)] shadow-[0_20px_36px_rgba(0,0,0,0.18)]">
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-[#d62839] px-3 py-1 text-xs font-bold text-white">
            SUCCESS
          </span>
        </div>
        <h1 className="m-0 text-4xl font-extrabold leading-tight text-[#17395c] md:text-6xl">
          Registration Complete!
          <br />
          <span className="text-[#d62839]">Welcome to NariShakti, {firstName}</span>
        </h1>
        <p className="mx-auto mt-3 max-w-190 text-slate-600">
          Your account has been successfully created. You are now part of a community dedicated to empowering
          women and girls.
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link
            href="/dashboard/learner"
            className="rounded-full bg-[#d62839] px-5 py-3 font-bold text-white no-underline shadow-[0_10px_25px_rgba(214,40,57,0.25)]"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/profile"
            className="rounded-full border border-[#e0d3d7] bg-[#f8f7f7] px-5 py-3 font-bold text-[#243b63] no-underline"
          >
            Complete Your Profile
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-245">
        <h2 className="text-center text-3xl font-bold text-[#1f375e]">What&apos;s Next?</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-[#ece7e7] bg-[#fbfbfb] p-4">
            <h3 className="m-0 text-xl font-bold text-[#1f375e]">Explore Courses</h3>
            <p className="mt-2 text-slate-500">
              Access workshops and practical skill-building programs tailored for your growth.
            </p>
          </article>
          <article className="rounded-xl border border-[#ece7e7] bg-[#fbfbfb] p-4">
            <h3 className="m-0 text-xl font-bold text-[#1f375e]">Find a Mentor</h3>
            <p className="mt-2 text-slate-500">Connect with experienced women leaders who can guide your career path.</p>
          </article>
          <article className="rounded-xl border border-[#ece7e7] bg-[#fbfbfb] p-4">
            <h3 className="m-0 text-xl font-bold text-[#1f375e]">Browse Jobs</h3>
            <p className="mt-2 text-slate-500">Discover inclusive career opportunities from companies across Nepal.</p>
          </article>
        </div>
      </div>
    </section>
  );
}