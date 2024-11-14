// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";


export const metadata: Metadata = {
  title: "dozer-marketing-app-v2",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
       <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}