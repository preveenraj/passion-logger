import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import RootLayout from "@/components/RootLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Passion Logger",
  description: "A simple work logger to keep track of your daily tasks",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <Script src="https://accounts.google.com/gsi/client" async defer />
      <body className={inter.className}>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
