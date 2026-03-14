import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SmileCare Dental Clinic | Professional Dental Care & Healthy Smiles",
  description: "Modern dental clinic offering root canals, implants, whitening, and routine care. Experience professional and comfortable dental treatments in a relaxing environment.",
  keywords: ["dental clinic", "dentist", "smile care", "root canal", "dental implants", "teeth whitening", "professional dental care"],
  openGraph: {
    title: "SmileCare Dental Clinic",
    description: "Your partner in dental health and a beautiful smile.",
    url: "https://smilecare-dental.vercel.app",
    siteName: "SmileCare",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
