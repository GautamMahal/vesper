import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {AntdRegistry} from "@ant-design/nextjs-registry";
import React from "react";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Joker",
  description: "Designed by Joker",
};

export default function RootLayout({
  children,
    // work, chat
}: Readonly<{
  children: React.ReactNode;
  work: React.ReactNode;
  chat: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <AntdRegistry>
          <div>
              <div className={'flex justify-center text-purple-500 p-6 gap-6'}>
                  <Link href="/">Home</Link>
                  <Link href={'/blog'}>Blog</Link>
              </div>
              {/*<div className={'flex gap-6'}>*/}
              {/*    {work}*/}
              {/*    {chat}*/}
              {/*</div>*/}
              {children}
          </div>
      </AntdRegistry>
      </body>
    </html>
  );
}
