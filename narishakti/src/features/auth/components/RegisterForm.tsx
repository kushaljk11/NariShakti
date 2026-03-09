"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { registerRequest } from "@/features/auth/auth.client";

type RegisterResult = {
  id: string;
  name: string;
  email: string;
  role: "learner" | "mentor" | "admin" | "organization";
};

export function RegisterForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"learner" | "mentor" | "admin" | "organization">("learner");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await registerRequest<RegisterResult>({
        name,
        email,
        password,
        role,
      });
      router.push(`/register/success?name=${encodeURIComponent(response.user.name)}`);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Could not register");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-105 rounded-2xl border border-rose-100 bg-white p-5 shadow-[0_10px_30px_rgba(214,40,57,0.08)]"
    >
      <h1 className="text-4xl font-bold text-slate-800">Create Account</h1>
      <p className="mt-1 text-sm text-slate-500">Register to start courses, jobs, and mentorship access.</p>

      <label className="mb-1 mt-4 block text-sm font-semibold text-slate-700">Name</label>
      <input
        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-red-200 transition focus:border-red-500 focus:ring-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label className="mb-1 mt-4 block text-sm font-semibold text-slate-700">Email</label>
      <input
        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-red-200 transition focus:border-red-500 focus:ring-2"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label className="mb-1 mt-4 block text-sm font-semibold text-slate-700">Password</label>
      <input
        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-red-200 transition focus:border-red-500 focus:ring-2"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        minLength={6}
        required
      />

      <label className="mb-1 mt-4 block text-sm font-semibold text-slate-700">Role</label>
      <select
        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none ring-red-200 transition focus:border-red-500 focus:ring-2"
        value={role}
        onChange={(e) => setRole(e.target.value as typeof role)}
      >
        <option value="learner">Learner</option>
        <option value="mentor">Mentor</option>
        <option value="organization">Organization</option>
        <option value="admin">Admin</option>
      </select>

      <button
        className="mt-4 w-full rounded-full bg-[#d62839] px-4 py-3 font-bold text-white shadow-[0_10px_25px_rgba(214,40,57,0.25)] transition hover:bg-[#b11f2e] disabled:cursor-not-allowed disabled:opacity-70"
        disabled={isLoading}
        type="submit"
      >
        {isLoading ? "Creating account..." : "Register"}
      </button>

      {error ? <p className="mt-3 text-sm text-red-700">{error}</p> : null}

      <p className="mt-4 text-sm text-slate-500">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-[#d62839] no-underline">
          Login
        </Link>
      </p>
    </form>
  );
}
