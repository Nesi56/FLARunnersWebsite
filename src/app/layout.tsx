import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FLA Runners - Home",
  description: "The official FLA Runners website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
