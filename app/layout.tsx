// app/layout.tsx
import type { Metadata } from "next";
import Footer from "../components/footer";
import Header from "../components/header";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shetty Homoeopathic Medical College",
  description:
    "Approved by NCH, Ministry of Ayush, Govt. of India | Affiliated to RGUHS, Bengaluru",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className={inter.className}>
        <Header />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}