import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AppendPay",
  description: "Microloans for all Filipinos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter} antialiased`}>
        <Navbar />
        <main className=" max-w-[1600px] mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
