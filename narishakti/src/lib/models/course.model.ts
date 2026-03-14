import mongoose, { Model, Schema } from "mongoose";
import type { CourseLevel } from "@/types/course";

export interface ICourse {
  id: string;
  title: string;
  duration: string;
  level: CourseLevel;
  description?: string;
  instructor?: string;
  created_at: Date;
  updated_at: Date;
}

type CourseDocument = Omit<ICourse, "id">;

const courseSchema = new Schema<CourseDocument>(
  {
    title: { type: String, required: true, trim: true },
    duration: { type: String, required: true, trim: true },
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      required: true,
      default: "Beginner",
    },
    description: { type: String, default: "", trim: true },
    instructor: { type: String, default: "", trim: true },
  },
  {
    collection: "courses",
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  },
);

courseSchema.set("toJSON", {
  transform: (_doc, ret: Record<string, unknown>) => {
    ret.id = String(ret._id);
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

export const CourseModel: Model<CourseDocument> =
  (mongoose.models.Course as Model<CourseDocument>) ||
  mongoose.model<CourseDocument>("Course", courseSchema);
