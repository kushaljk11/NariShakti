import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
// import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "NariShakti",
  description: "Women empowerment platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <main>{children}</main>
          {/* <Footer /> */}
        </AuthProvider>
      </body>
    </html>
  );
}
