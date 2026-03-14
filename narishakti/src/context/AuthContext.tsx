"use client";

import { createContext, useEffect, useMemo, useState } from "react";
import type { User } from "@/types/user";

const AUTH_USER_STORAGE_KEY = "narishakti_user";

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

  useEffect(() => {
    const storedUser = window.localStorage.getItem(AUTH_USER_STORAGE_KEY);
    if (!storedUser) {
      return;
    }

    try {
      setUser(JSON.parse(storedUser) as User);
    } catch {
      window.localStorage.removeItem(AUTH_USER_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    if (user) {
      window.localStorage.setItem(AUTH_USER_STORAGE_KEY, JSON.stringify(user));
      return;
    }

    window.localStorage.removeItem(AUTH_USER_STORAGE_KEY);
  }, [user]);

  const value = useMemo(() => ({ user, setUser }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
