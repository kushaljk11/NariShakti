"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { loginRequest } from "@/features/auth/auth.client";
import { useAuth } from "@/hooks/useAuth";
import type { User } from "@/types/user";
import loginImage from "@/uploads/login.webp";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";

const AUTH_TOKEN_STORAGE_KEY = "narishakti_token";
type LoginResult = User;

export function LoginForm() {
  const router = useRouter();
  const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await loginRequest<LoginResult>({ email, password });
      setUser(response.user);
      window.localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, response.token);
      setMessage(`Welcome back ${response.user.name} (${response.user.role}).`);

      const roleDashboardPath: Record<LoginResult["role"], string> = {
        learner: "/dashboard/learner",
        mentor: "/dashboard/mentor",
        admin: "/dashboard/admin",
        organization: "/dashboard/organization",
      };

      router.push(roleDashboardPath[response.user.role]);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Could not login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid min-h-screen w-full bg-[#dde6da] md:grid-cols-2">
      <section className="relative flex flex-col justify-end overflow-hidden p-8 text-white md:p-12">
        <Image src={loginImage} alt="Women community" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/35" />
        <h2 className="relative m-0 max-w-97.5 text-4xl font-semi-bold leading-[1.05] md:text-6xl">
          Empowering Women, Transforming Nations
        </h2>
        <p className="relative mt-4 max-w-105 text-white/90">
          Join NariShakti, Nepal&apos;s premier digital platform dedicated to the growth, safety, and
          empowerment of women and girls.
        </p>
      </section>

      <section className="grid place-items-center p-6 md:p-8">
        <form onSubmit={onSubmit} className="w-full max-w-105">
          <p className="mb-3 text-4xl semi-bold text-[#d62839]">NariShakti</p>
          <h1 className="text-5xl font-bold text-slate-800">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-500">Please enter your details to access your portal.</p>

          <label className="mb-1 mt-5 block text-sm font-semibold text-slate-700">Email Address</label>
          <div className="relative">
            <FaEnvelope className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-slate-800 outline-none ring-red-200 transition focus:border-red-500 focus:ring-2"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              required
            />
          </div>

          <label className="mb-1 mt-4 block text-sm font-semibold text-slate-700">Password</label>
          <div className="relative">
            <FaLock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-11 text-slate-800 outline-none ring-red-200 transition focus:border-red-500 focus:ring-2"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="mt-3 flex items-center justify-between gap-3">
            <label className="flex items-center gap-2 text-sm text-slate-500">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" className="text-sm font-semibold text-[#d62839] no-underline">
              Forgot Password?
            </a>
          </div>

          <button
            className="mt-4 w-full rounded-full cursor-pointer bg-[#d62839] px-4 py-3 font-bold text-white shadow-[0_10px_25px_rgba(214,40,57,0.25)] transition hover:bg-[#b11f2e] disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? "Logging in..." : "Log In"}
          </button>

          {message ? <p className="mt-3 text-sm text-teal-700">{message}</p> : null}
          {error ? <p className="mt-3 text-sm text-red-700">{error}</p> : null}

          <p className="mt-4 text-centertext-sm text-center text-slate-500">
            New to NariShakti?{" "}
            <Link href="/register" className="font-semibold text-[#d62839] no-underline">
              Create an account
            </Link>
          </p>

          <br />
          <hr className="text-slate-500" />
          <div className="flex gap-5 mt-5 text-sm text-slate-500 justify-center">
          <p className="">HELP CENTER</p>
          <p>PRIVACY POLICY</p>
          <p>TERMS OF SERVICES</p>
          </div>
        </form>
      </section>
    </div>
  );
}
