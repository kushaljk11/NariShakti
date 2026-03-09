"use client";

import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...props }: Props) {
  return (
    <button
      {...props}
      style={{
        background: "var(--brand)",
        color: "white",
        border: 0,
        borderRadius: "8px",
        padding: "0.6rem 1rem",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}
