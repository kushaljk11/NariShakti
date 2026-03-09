import Link from "next/link";

type DashboardCardProps = {
  title: string;
  description: string;
  href: string;
};

export function DashboardCard({ title, description, href }: DashboardCardProps) {
  return (
    <Link
      href={href}
      style={{
        display: "block",
        padding: "1rem",
        border: "1px solid #d2dde5",
        borderRadius: "10px",
        background: "#ffffff",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}
