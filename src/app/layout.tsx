import Image from "next/image";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FLA Runners - Home",
  description: "The official FLA Runners website.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
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
          <Link href="/">
            <Image
              src="/FLA_LOGO.png"
              alt="FLA Runners Logo"
              width={88}
              height={70}
              className="w-[88px] h-[70px]"
            />
          </Link>

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
        <footer className="p-20 bg-neutral-950 flex gap-20 justify-center flex-col sm:flex-row">
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
            <Link
              href="https://maps.google.com/?q=Sabal+Pines+Park"
              className="flex items-center gap-2"
            >
              <svg
                className="text-green-200"
                width="14"
                height="19"
                viewBox="0 0 14 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0.5C3.27231 0.5 0.25 3.52231 0.25 7.25C0.25 8.71784 0.731219 10.0647 1.53109 11.1678C1.54544 11.1943 1.54769 11.2238 1.564 11.2491L6.064 17.9991C6.27269 18.3121 6.62425 18.5 7 18.5C7.37575 18.5 7.72731 18.3121 7.936 17.9991L12.436 11.2491C12.4526 11.2238 12.4546 11.1943 12.4689 11.1678C13.2688 10.0647 13.75 8.71784 13.75 7.25C13.75 3.52231 10.7277 0.5 7 0.5ZM7 9.5C5.75744 9.5 4.75 8.49256 4.75 7.25C4.75 6.00744 5.75744 5 7 5C8.24256 5 9.25 6.00744 9.25 7.25C9.25 8.49256 8.24256 9.5 7 9.5Z"
                  fill="#fb64b6"
                />
              </svg>
              <pre>{`Sabal Pines Park #4
5005 NW 39th Ave.
Coconut Creek, FL 33073`}</pre>
            </Link>
            <Link href="tel:+1234567890" className="flex items-center gap-2">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.125 5.125V0.625H6.875V5.125L4.0625 7.9375L8.5625 12.4375L11.375 9.625H15.875V16.375H11.375C5.16179 16.375 0.125 11.3382 0.125 5.125Z"
                  fill="#fb64b6"
                />
              </svg>

              <span>(954) 658-8714</span>
            </Link>
            <Link
              href="mailto:sfla.roadrunners@gmail.com"
              className="flex items-center gap-2"
            >
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 3.15002L8 7.57502L14 3.15002"
                  stroke="#fb64b6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.25 1.875H2.75C1.92157 1.875 1.25 2.54657 1.25 3.375V10.875C1.25 11.7034 1.92157 12.375 2.75 12.375H13.25C14.0784 12.375 14.75 11.7034 14.75 10.875V3.375C14.75 2.54657 14.0784 1.875 13.25 1.875Z"
                  stroke="#fb64b6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>SFLA.ROADRUNNERS@GMAIL.COM</span>
            </Link>

            <div className="flex gap-3 mt-2">
              <Link
                href="https://www.instagram.com/fla_roadrunners"
                target="_blank"
                className="p-2 bg-pink-400 rounded-md transition hover:bg-pink-300"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_24_91)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11 16.5C14.0376 16.5 16.5 14.0376 16.5 11C16.5 7.96243 14.0376 5.5 11 5.5C7.96243 5.5 5.5 7.96243 5.5 11C5.5 14.0376 7.96243 16.5 11 16.5ZM11 14.6667C13.025 14.6667 14.6667 13.025 14.6667 11C14.6667 8.97496 13.025 7.33333 11 7.33333C8.97496 7.33333 7.33333 8.97496 7.33333 11C7.33333 13.025 8.97496 14.6667 11 14.6667Z"
                      fill="#0F0F0F"
                    />
                    <path
                      d="M16.4999 4.58337C15.9936 4.58337 15.5833 4.99378 15.5833 5.50004C15.5833 6.0063 15.9936 6.41671 16.4999 6.41671C17.0062 6.41671 17.4166 6.0063 17.4166 5.50004C17.4166 4.99378 17.0062 4.58337 16.4999 4.58337Z"
                      fill="#0F0F0F"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.51621 3.91968C0.916748 5.0962 0.916748 6.63634 0.916748 9.71663V12.2833C0.916748 15.3636 0.916748 16.9038 1.51621 18.0802C2.04351 19.1151 2.8849 19.9565 3.9198 20.4838C5.09632 21.0833 6.63646 21.0833 9.71675 21.0833H12.2834C15.3637 21.0833 16.9039 21.0833 18.0803 20.4838C19.1152 19.9565 19.9567 19.1151 20.4839 18.0802C21.0834 16.9038 21.0834 15.3636 21.0834 12.2833V9.71663C21.0834 6.63634 21.0834 5.0962 20.4839 3.91968C19.9567 2.88478 19.1152 2.04339 18.0803 1.51609C16.9039 0.916626 15.3637 0.916626 12.2834 0.916626H9.71675C6.63646 0.916626 5.09632 0.916626 3.9198 1.51609C2.8849 2.04339 2.04351 2.88478 1.51621 3.91968ZM12.2834 2.74996H9.71675C8.14635 2.74996 7.07881 2.75139 6.25366 2.8188C5.44989 2.88447 5.03885 3.0035 4.75212 3.1496C4.06219 3.50114 3.50126 4.06207 3.14972 4.752C3.00362 5.03873 2.88459 5.44976 2.81892 6.25353C2.75151 7.07869 2.75008 8.14623 2.75008 9.71663V12.2833C2.75008 13.8537 2.75151 14.9212 2.81892 15.7464C2.88459 16.5502 3.00362 16.9612 3.14972 17.248C3.50126 17.9378 4.06219 18.4988 4.75212 18.8503C5.03885 18.9964 5.44989 19.1155 6.25366 19.1811C7.07881 19.2485 8.14635 19.25 9.71675 19.25H12.2834C13.8538 19.25 14.9213 19.2485 15.7465 19.1811C16.5503 19.1155 16.9613 18.9964 17.2481 18.8503C17.938 18.4988 18.4989 17.9378 18.8504 17.248C18.9965 16.9612 19.1156 16.5502 19.1812 15.7464C19.2486 14.9212 19.2501 13.8537 19.2501 12.2833V9.71663C19.2501 8.14623 19.2486 7.07869 19.1812 6.25353C19.1156 5.44976 18.9965 5.03873 18.8504 4.752C18.4989 4.06207 17.938 3.50114 17.2481 3.1496C16.9613 3.0035 16.5503 2.88447 15.7465 2.8188C14.9213 2.75139 13.8538 2.74996 12.2834 2.74996Z"
                      fill="#0F0F0F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_24_91">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link
                href="https://www.facebook.com/p/Florida-Roadrunners-61577171406607"
                target="_blank"
                className="p-2 bg-pink-400 rounded-md transition hover:bg-pink-300"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_24_108)">
                    <path
                      d="M21.9998 10.9323C21.9741 8.83606 21.3498 6.79081 20.2006 5.03744C19.0513 3.28407 17.425 1.8956 15.5132 1.03555C13.6012 0.175507 11.4834 -0.120292 9.40897 0.182973C7.33463 0.486252 5.3901 1.37596 3.80445 2.74735C2.21878 4.11874 1.05801 5.91468 0.45884 7.92365C-0.14032 9.93265 -0.152943 12.071 0.422483 14.0869C0.99791 16.1029 2.13741 17.9123 3.70678 19.3023C5.27614 20.6923 7.21004 21.605 9.28068 21.9326V14.1361H6.53062V10.9323H9.28068V8.49848C9.21702 7.9326 9.27834 7.35961 9.4604 6.81999C9.64246 6.28037 9.9407 5.78728 10.3341 5.37552C10.7275 4.96375 11.2064 4.64335 11.7372 4.43695C12.268 4.23053 12.8376 4.14312 13.4058 4.1809C14.2306 4.19219 15.0534 4.26574 15.8671 4.40091V7.15099H14.4921C14.255 7.12108 14.0141 7.14484 13.7875 7.22051C13.5608 7.29618 13.354 7.42182 13.1824 7.58814C13.0108 7.75447 12.8787 7.95723 12.7961 8.1814C12.7133 8.40567 12.6821 8.64562 12.7045 8.8835V10.9598H15.7571L15.2621 14.1636H12.7183V21.8639C15.317 21.4529 17.6823 20.124 19.3852 18.1184C21.088 16.1128 22.0156 13.5633 21.9998 10.9323Z"
                      fill="#0F0F0F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_24_108">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          </address>
        </footer>
      </body>
    </html>
  );
}
