import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sebastian Burman",
  description: "Sebastian Burman's portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-zinc-900">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
