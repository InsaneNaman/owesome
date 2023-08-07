import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import RootProvider from "./Provider";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Owesome - Review app for web",
  description:
    "Owesome: Elevate Your Web Reviews. A Better Alternative to current review sharing apps. Share Authentic Feedback and Ratings. Join the Revolution!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/brand.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta httpEquiv="Accept-CH" content="DPR, Width" />
        <link rel="shortcut icon" href="/images/brand.svg" />
      </head>
      <body className={inter.className}>
        <RootProvider>
          <Header />
          {children}
          <Footer />
        </RootProvider>
      </body>
    </html>
  );
}
