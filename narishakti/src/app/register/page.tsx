import { RegisterForm } from "@/features/auth/components/RegisterForm";

export default function RegisterPage() {
  return (
    <section className="grid min-h-[calc(100vh-90px)] place-items-center px-4 py-8">
      <RegisterForm />
    </section>
  );
}
