"use client";

import { createContext, useMemo, useState } from "react";
import type { User } from "@/types/user";

type AuthContextValue = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const AuthContext = createContext<AuthContextValue>({
  user: null,
  setUser: () => {
    return;
  },
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const value = useMemo(() => ({ user, setUser }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
