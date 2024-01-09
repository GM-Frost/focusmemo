import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import db from "@/lib/supabase/db";
import { Outfit } from "next/font/google";
import ThemeProvider from "@/lib/providers/next-theme-provider";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Focus Memo",
  description: "Productivity and Project tracking app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
