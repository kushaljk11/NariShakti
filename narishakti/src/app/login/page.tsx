import { LoginForm } from "@/features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-screen w-screen max-w-none">
      <LoginForm />
    </section>
  );
}