import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bengal Machinery Corporation LLP | Industrial Switchgear & Electrical Equipment",
  description:
    "Founded in 1977, BMC LLP is one of Kolkata's most trusted names in industrial switchgear and electrical equipment. Authorized channel partner for Schneider Electric, Lauritz Knudsen, CG Power, and more.",
  keywords:
    "switchgear, electrical equipment, Kolkata, Schneider Electric, Lauritz Knudsen, CG Power, BMC LLP, industrial electrical, automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
