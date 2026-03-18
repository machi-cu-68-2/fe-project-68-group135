import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Group135 Frontend",
  description: "someone changed the group name to something uncool :(",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
