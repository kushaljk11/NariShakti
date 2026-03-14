export interface User {
  id: string;
  name: string;
  email: string;
  role: "learner" | "mentor" | "organization" | "admin";
  phone?: string;
  location?: string;
  bio?: string;
  profile_image?: string;
  created_at?: string | Date;
}
