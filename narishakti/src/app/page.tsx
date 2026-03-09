import Image from "next/image";
import { FaBriefcase, FaCircleCheck, FaLightbulb, FaShieldHalved, FaUsers } from "react-icons/fa6";
import { Navbar } from "@/components/layout/Navbar";
import heroImage from "@/uploads/hero.jpg";
import loginImage from "@/uploads/login.webp";

const howItWorksSteps = [
  {
    number: "1",
    title: "For Learners",
    description:
      "Sign up, browse courses, and start your learning journey with expert-led workshops and materials.",
    badgeClass: "bg-[#ef3347]",
  },
  {
    number: "2",
    title: "For Mentors",
    description:
      "Share your expertise, guide aspiring professionals, and help shape the future of women in Nepal.",
    badgeClass: "bg-[#3c7ea9]",
  },
  {
    number: "3",
    title: "For Organizations",
    description:
      "Partner with us to provide jobs, resources, or funding to scale our collective impact.",
    badgeClass: "bg-[#111c3a]",
  },
] as const;

const featuredCourses = [
  {
    category: "TECHNOLOGY",
    title: "Digital Literacy & IT",
    description: "Master essential computer skills and modern digital marketing techniques.",
    footnote: "Free for members",
    weeks: "12 Weeks",
    image: heroImage,
    imageAlt: "Women learning digital skills together",
    imagePosition: "object-[center_35%]",
  },
  {
    category: "ENTREPRENEURSHIP",
    title: "Advanced Tailoring",
    description: "Learn professional stitching and design to start your own fashion business.",
    footnote: "Scholarships Avail.",
    weeks: "8 Weeks",
    image: loginImage,
    imageAlt: "Women collaborating in a training session",
    imagePosition: "object-[center_40%]",
  },
  {
    category: "MANAGEMENT",
    title: "Micro-Business Management",
    description: "Financial planning and operations for small-scale entrepreneurs.",
    footnote: "Certified",
    weeks: "6 Weeks",
    image: heroImage,
    imageAlt: "Women discussing business growth ideas",
    imagePosition: "object-[center_60%]",
  },
] as const;

const upcomingEvents = [
  {
    day: "24",
    month: "OCT",
    title: "Financial Literacy for Startups",
    description: "Interactive webinar with leading economists.",
    meta: "2:00 PM  •  Zoom",
    dayClass: "bg-[var(--primary)]",
    metaClass: "text-[var(--primary)]",
  },
  {
    day: "28",
    month: "OCT",
    title: "Women in Tech Workshop",
    description: "Hands-on coding session for beginners.",
    meta: "10:00 AM  •  Kathmandu Hub",
    dayClass: "bg-[#3c7ea9]",
    metaClass: "text-[#3c7ea9]",
  },
] as const;

const testimonials = [
  {
    quote:
      '"NariShakti changed my life. I started with the tailoring course and now I run my own boutique in Pokhara employing three other women."',
    name: "Asha Gurung",
    role: "Entrepreneur, Pokhara",
  },
  {
    quote:
      '"The digital skills training helped me get a job as a remote data analyst. I can now support my family while working from home."',
    name: "Riya Shrestha",
    role: "Data Analyst, Kathmandu",
  },
  {
    quote:
      '"The mentorship program gave me the confidence to pitch my business idea to investors. Today, my startup is growing daily!"',
    name: "Sita Lama",
    role: "Startup Founder, Lalitpur",
  },
] as const;

const supportingOrganizations = [
  "gov.nepal",
  "Women's Trust",
  "N G O Federation",
  "SkillBuild",
  "EmpowerHub",
] as const;

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f5f4f6]">
        <div className="mx-auto grid w-full max-w-345 px-4 py-12 md:px-8 items-center gap-12 md:grid-cols-2 md:gap-12">
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-[#f8d9dd] px-3 py-1 text-xs font-semibold text-[#e63746]">
              Empowering Women in Nepal
            </span>

            <div className="space-y-1">
              <h1 className="text-5xl font-semibold leading-[1.1] text-[#111c3a] md:text-7xl">NariShakti:</h1>
              <h2 className="text-5xl font-semibold leading-[1.1] text-(--primary) md:text-7xl">Empowering Her</h2>
              <h2 className="text-5xl font-semibold leading-[1.1] text-(--primary) md:text-7xl">Potential</h2>
            </div>

            <p className="max-w-155 text-lg leading-relaxed text-[#5c6785] md:text-lg">
              Join Nepal&apos;s premier platform for skills, mentorship, and opportunities. We bridge the gap
              between dreams and reality for every woman.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="rounded-2xl bg-(--primary) px-7 py-3 text-xl font-semibold text-white transition hover:bg-(--primary-hover) md:text-xl">
                Join Now
              </button>
              <button className="rounded-2xl bg-[#3c7ea9] px-7 py-3 text-xl font-semibold text-white transition hover:bg-[#326e95] md:text-xl">
                Explore Courses
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-[0_12px_22px_rgba(18,28,45,0.22)]">
              <Image
                src={heroImage}
                alt="Women in community collaboration"
                className="h-140 w-full object-cover md:h-160"
                priority
              />
            </div>

            <div className="absolute -bottom-6 left-1/2 w-56 -translate-x-1/2 rounded-2xl bg-white px-4 py-4 shadow-lg md:left-[-20] md:translate-x-0">
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#2fbf71] text-white">
                  <FaCircleCheck />
                </span>
                <div>
                  <p className="text-sm font-bold text-[#1e2c4e]">15,000+</p>
                  <p className="text-xs text-[#65708d]">Women Empowered</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core pillars */}
        <section className="mx-auto mt-16 w-full rounded-sm bg-white px-4 py-12 md:px-6">
          <div className="mx-auto max-w-245 text-center">
            <h2 className="text-4xl font-semibold text-[#111c3a] md:text-4xl">Our Core Pillars</h2>
            <p className="mt-1 text-sm text-[#5c6785] md:text-lg">
              Comprehensive support systems designed to help you thrive in every aspect of life.
            </p>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-3xl border border-[#dbe2df] bg-white p-6 text-center shadow-sm">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-(--primary) text-white">
                <FaLightbulb />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-[#111c3a]">Skills Training</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5c6785]">
                Practical workshops ranging from digital literacy to traditional crafts.
              </p>
            </article>

            <article className="rounded-3xl border border-[#dbe2df] bg-white p-6 text-center shadow-sm">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-(--primary) text-white">
                <FaBriefcase />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-[#111c3a]">Jobs & Opportunities</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5c6785]">
                Direct connections with employers looking for talented female professionals.
              </p>
            </article>

            <article className="rounded-3xl border border-[#dbe2df] bg-white p-6 text-center shadow-sm">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-(--primary) text-white">
                <FaShieldHalved />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-[#111c3a]">Health & Safety</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5c6785]">
                Resources for wellness, mental health, and personal safety awareness.
              </p>
            </article>

            <article className="rounded-3xl border border-[#dbe2df] bg-white p-6 text-center shadow-sm">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-(--primary) text-white">
                <FaUsers />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-[#111c3a]">Mentorship</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5c6785]">
                Guidance from successful leaders across various industries in Nepal.
              </p>
            </article>
          </div>
        </section>

        {/* Stats */}
        <section className="w-full bg-[#f5f4f6] px-4 py-10 md:px-8">
          <div className="mx-auto grid w-full max-w-345 grid-cols-2 gap-y-8 text-center md:grid-cols-4">
            <div>
              <p className="text-3xl font-bold text-(--primary) md:text-3xl">15k+</p>
              <p className="mt-2 text-xl text-[#42506b] md:text-xl">Women Empowered</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#3c7ea9] md:text-3xl">120+</p>
              <p className="mt-2 text-xl text-[#42506b] md:text-xl">Courses Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-(--primary) md:text-3xl">5k+</p>
              <p className="mt-2 text-xl text-[#42506b] md:text-xl">Jobs Found</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#3c7ea9] md:text-3xl">50+</p>
              <p className="mt-2 text-xl text-[#42506b] md:text-xl">Partner NGOs</p>
            </div>
          </div>
        </section>

        <section className="w-full bg-white px-4 py-12 md:px-8">
          <div className="mx-auto w-full max-w-345 py-6">
            <h2 className="text-center text-5xl font-bold text-[#111c3a] md:text-3xl">How It Works</h2>
            <p className="text-center text-lg text-[#5c6785] md:text-lg">
              A clear pathway for every member of our community.
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {howItWorksSteps.map((step) => (
                <article key={step.title} className="mx-auto flex max-w-115 flex-col items-center text-center">
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-full text-lg font-bold text-white ${step.badgeClass}`}
                  >
                    {step.number}
                  </span>
                  <h3 className="mt-5 text-3xl font-bold text-[#111c3a]">{step.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-[#5c6785]">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="w-full bg-[#f5f4f6] px-4 py-12 md:px-8">
          <div className="mx-auto w-full max-w-345">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-4xl font-semibold text-[#111c3a] md:text-4xl">Upcoming Events</h2>
                <p className="mt-2 text-sm text-[#5c6785] md:text-base">Join our live webinars and interactive workshops.</p>
              </div>
              <a href="#" className="text-sm font-semibold text-(--primary) no-underline">
                See Calendar
              </a>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {upcomingEvents.map((event) => (
                <article key={event.title} className="flex items-center gap-4 rounded-xl bg-white border border-[#e5e7eb] p-4">
                  <div className={`grid h-14 w-14 place-items-center rounded-2xl text-white ${event.dayClass}`}>
                    <span className="text-2xl font-semibold leading-none">{event.day}</span>
                    <span className="text-[10px] font-semibold leading-none">{event.month}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#111c3a]">{event.title}</h3>
                    <p className="mt-1 text-sm text-[#5c6785]">{event.description}</p>
                    <p className={`mt-1 text-xs font-semibold ${event.metaClass}`}>{event.meta}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section className="w-full bg-white px-4 py-12 md:px-8">
          <div className="mx-auto w-full max-w-345">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-4xl font-semibold text-[#111c3a]  md:text-4xl">Featured Courses</h2>
                <p className="mt-2 text-sm text-[#5c6785] md:text-base">
                  Specially curated programs to build your professional foundation.
                </p>
              </div>
              <a href="#" className="text-sm font-semibold text-(--primary) no-underline">
                View All Courses -&gt;
              </a>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {featuredCourses.map((course) => (
                <article key={course.title} className="overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-sm">
                  <div className="relative h-40">
                    <Image src={course.image} alt={course.imageAlt} fill className={`object-cover ${course.imagePosition}`} />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-semibold tracking-wide text-[#7a859f]">{course.category}</p>
                    <h3 className="mt-2 text-2xl font-bold text-[#111c3a]">{course.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5c6785]">{course.description}</p>
                    <div className="mt-4 flex items-center justify-between text-sm">
                      <span className="font-semibold text-(--primary)">{course.footnote}</span>
                      <span className="text-[#7a859f]">{course.weeks}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>


        {/* Voices of Success Section */}   
        <section className="w-full bg-(--primary) px-4 py-14 md:px-8">
          <div className="mx-auto w-full max-w-345">
            <h2 className="text-center text-4xl font-bold text-white md:text-5xl">Voices of Success</h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {testimonials.map((item) => (
                <article key={item.name} className="rounded-xl bg-[#f24b5d] p-5 text-white">
                  <p className="text-lg tracking-wide text-[#ffe07d]">★★★★★</p>
                  <p className="mt-3 text-sm leading-relaxed">{item.quote}</p>
                  <div className="mt-4 border-t border-white/20 pt-3">
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-white/80">{item.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Supporting Organizations Section */}
        <section className="w-full bg-[#f5f4f6] px-4 py-12 md:px-8">
          <div className="mx-auto w-full max-w-345 text-center">
            <h2 className="text-3xl font-semibold text-[#8a97b2] md:text-4xl">Supported by Leading Organizations</h2>
            <div className="mt-8 grid grid-cols-2 gap-4 text-center md:grid-cols-5">
              {supportingOrganizations.map((organization) => (
                <p key={organization} className="text-lg font-semibold text-[#7a859f] md:text-xl">
                  {organization}
                </p>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
