import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ByteForge - Java Learning Platform",
  description:
    "Master Java programming with interactive lessons, live compiler, and AI assistance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <html lang="en">
        <body className={inter.className}>
          {children}
          <Toaster />
          {/* <ModeToggle /> */}
        </body>
      </html>
    </ThemeProvider>
  );
}

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode_toggle";
