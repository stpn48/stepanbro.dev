import { ReactQueryProvider } from "@/app/components/ReactQueryProvider";
import "@/app/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
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
        <body className={`${geistSans.variable} bg-[#0a0a0a] antialiased`}>
          {children}

          <Toaster />
        </body>
      </ReactQueryProvider>
    </html>
  );
}
