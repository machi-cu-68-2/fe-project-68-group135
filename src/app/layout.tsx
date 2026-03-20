import type { Metadata } from "next";
import { Sarabun } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const sarabun = Sarabun({
  weight: ["400", "700"],
  subsets: ["latin", "thai"]
});

export const metadata: Metadata = {
  title: "Group135 Frontend",
  description: "someone changed the group name to something uncool :("
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${sarabun.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
