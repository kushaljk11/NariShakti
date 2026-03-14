import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const iconPath = path.join(process.cwd(), "src", "uploads", "logo.png");
  const iconBuffer = await readFile(iconPath);

  return new Response(iconBuffer, {
    headers: {
      "content-type": "image/png",
      "cache-control": "public, max-age=31536000, immutable",
    },
  });
}
