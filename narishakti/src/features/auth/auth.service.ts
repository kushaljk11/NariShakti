import bcrypt from "bcryptjs";
import { signAppToken } from "@/lib/auth";
import { connectDb } from "@/lib/db";
import { UserModel, type UserRole } from "@/lib/models/user.model";

type SignupInput = {
  name?: string;
  email?: string;
  password?: string;
  role?: UserRole;
  phone?: string;
  location?: string;
  bio?: string;
  profile_image?: string;
};

type SafeUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  phone?: string;
  location?: string;
  bio?: string;
  profile_image?: string;
  created_at: Date;
};

function toSafeUser(doc: {
  _id: { toString: () => string };
  name: string;
  email: string;
  role: UserRole;
  phone?: string;
  location?: string;
  bio?: string;
  profile_image?: string;
  created_at: Date;
}): SafeUser {
  return {
    id: doc._id.toString(),
    name: doc.name,
    email: doc.email,
    role: doc.role,
    phone: doc.phone,
    location: doc.location,
    bio: doc.bio,
    profile_image: doc.profile_image,
    created_at: doc.created_at,
  };
}

export async function getSafeUserByEmail(email: string) {
  if (!email) {
    throw new Error("Email is required");
  }

  await connectDb();

  const user = await UserModel.findOne({ email: email.toLowerCase() });
  if (!user) {
    throw new Error("User not found");
  }

  return toSafeUser(user);
}

export async function signupUser(input: SignupInput) {
  const name = input.name?.trim();
  const email = input.email?.trim().toLowerCase();
  const password = input.password ?? "";

  if (!name) {
    throw new Error("Name is required");
  }

  if (!email) {
    throw new Error("Email is required");
  }

  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters");
  }

  await connectDb();

  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    throw new Error("Email already exists");
  }

  const password_hash = await bcrypt.hash(password, 10);

  const createdUser = await UserModel.create({
    name,
    email,
    password_hash,
    role: input.role ?? "learner",
    phone: input.phone ?? "",
    location: input.location ?? "",
    bio: input.bio ?? "",
    profile_image: input.profile_image ?? "",
  });

  const safeUser = toSafeUser(createdUser);

  const token = signAppToken({ email: safeUser.email, role: safeUser.role });
  return { user: safeUser, token };
}

export async function loginUser(email: string, password: string) {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  await connectDb();

  const user = await UserModel.findOne({ email: email.toLowerCase() });
  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password_hash);
  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  const safeUser = toSafeUser(user);

  const token = signAppToken({ email: safeUser.email, role: safeUser.role });
  return {
    user: safeUser,
    token,
  };
}
