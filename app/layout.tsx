import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs";
import Header from "@/componants/Header";
import BootstrapClient from "@/scripts/BootstrapClient";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
              <ClerkProvider>
                  <Header></Header>
                  <main>
                    {children}
                  </main>
              </ClerkProvider>
              <BootstrapClient></BootstrapClient>
      </body>
    </html>
  );
}
