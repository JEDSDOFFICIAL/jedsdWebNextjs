import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata configuration
export const metadata: Metadata = {
  title: "JEDSD - Journal of Embedded and Digital System Design",
  description:
    "Journal of Embedded and Digital System Design. A pioneering platform dedicated to advancing the fields of embedded systems and digital design. At JEDSD, we aim to bridge the gap between innovation and application by providing insightful research, expert analysis, and cutting-edge solutions.",
  icons: {
    icon: [
      {
        url: "/logojedsd.jpg",
      },
    ],
  },
  // other: {
  //   "google-site-verification": "P2Y8X-_uCxmaPSyTZKfeZsv6tULWuEao05ezrbrwsGk",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
