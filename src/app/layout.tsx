import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import { ReactQueryProvider } from "@/app/components/ReactQueryProvider";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "stepan.dev",
  description: "stepan portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactQueryProvider>
        <body className={`${geistSans.variable} antialiased`}>
          {children}
          <Toaster />
        </body>
      </ReactQueryProvider>
    </html>
  );
}
