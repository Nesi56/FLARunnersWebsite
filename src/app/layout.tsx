import Image from "next/image";
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

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
      <body>
        <header className="flex w-full px-8 py-3 justify-between items-center bg-neutral-900">
          <Image
            src="/FLA_LOGO.png"
            alt="FLA Runners Logo"
            width={88}
            height={70}
            className="w-[88px] h-[70px]"
          />

          <div className="flex gap-3 text-md">
            <Link
              href="/"
              className="leading-none font-bold text-center rounded-md px-4 py-3 transition hover:bg-neutral-700"
            >
              <span className="block leading-none">Home</span>
            </Link>
            <Link
              href="/about"
              className="leading-none font-bold text-center rounded-md px-4 py-3 transition hover:bg-neutral-700"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="leading-none font-bold text-center rounded-md px-4 py-3 bg-pink-600 transition hover:bg-pink-500"
            >
              <span className="block leading-none">Contact</span>
            </Link>
          </div>
        </header>
        <main>{children}</main>
        <footer className="p-20 bg-neutral-950 flex gap-20 justify-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-pink-400 text-2xl">Quick Links</h2>
            <hr className="text-pink-400" />
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>

          <address className="flex flex-col gap-2 text-sm not-italic">
            <h2 className="text-pink-400 text-2xl">Contact</h2>
            <hr className="text-pink-400" />
            <Link href="https://maps.google.com/?q=Sabal+Pines+Park">
              <pre>{`Sabal Pines Park #4
5005 NW 39th Ave.
Coconut Creek, FL 33073`}</pre>
            </Link>
            <Link href="tel:+1234567890">(954) 658-8714</Link>
            <Link href="mailto:sfia.roadrunners@gmail.com">
              SFIA.ROADRUNNERS@GMAIL.COM
            </Link>
          </address>
        </footer>
      </body>
    </html>
  );
}
