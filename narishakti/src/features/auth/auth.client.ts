type ApiResponse<T> = {
  user: T;
  token: string;
  message?: string;
};

type LoginInput = {
  email: string;
  password: string;
};

type RegisterInput = {
  name: string;
  email: string;
  password: string;
  role: "learner" | "mentor" | "admin" | "organization";
  phone?: string;
  location?: string;
  bio?: string;
  profile_image?: string;
};

async function postJson<T>(url: string, payload: unknown): Promise<ApiResponse<T>> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json()) as ApiResponse<T>;
  if (!response.ok) {
    throw new Error(data.message ?? "Request failed");
  }

  return data;
}

export function registerRequest<T>(payload: RegisterInput) {
  return postJson<T>("/api/auth/signup", payload);
}

export function loginRequest<T>(payload: LoginInput) {
  return postJson<T>("/api/auth/login", payload);
}
