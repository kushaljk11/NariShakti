import mongoose, { Model, Schema } from "mongoose";

export type UserRole = "learner" | "mentor" | "admin" | "organization";

export interface IUser {
  id: string;
  name: string;
  email: string;
  password_hash: string;
  role: UserRole;
  phone?: string;
  location?: string;
  bio?: string;
  profile_image?: string;
  created_at: Date;
}

type UserDocument = Omit<IUser, "id">;

const userSchema = new Schema<UserDocument>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password_hash: { type: String, required: true },
    role: {
      type: String,
      enum: ["learner", "mentor", "admin", "organization"],
      default: "learner",
      required: true,
    },
    phone: { type: String, default: "" },
    location: { type: String, default: "" },
    bio: { type: String, default: "" },
    profile_image: { type: String, default: "" },
  },
  {
    collection: "users",
    timestamps: { createdAt: "created_at", updatedAt: false },
  },
);

userSchema.set("toJSON", {
  transform: (_doc, ret: Record<string, unknown>) => {
    ret.id = String(ret._id);
    delete ret._id;
    delete ret.__v;
    delete ret.password_hash;
    return ret;
  },
});

export const UserModel: Model<UserDocument> =
  (mongoose.models.User as Model<UserDocument>) || mongoose.model<UserDocument>("User", userSchema);
