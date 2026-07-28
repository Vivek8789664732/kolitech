import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kolitech — Custom Software Engineering Studio",
  description: "We build custom systems, data pipelines, and high-performance APIs for companies that have outgrown generic software templates. Based in Surat.",
  openGraph: {
    title: "Kolitech — Custom Software Engineering Studio",
    description: "We build custom systems, data pipelines, and high-performance APIs for companies that have outgrown generic software templates.",
    url: "https://kolitech.in",
    siteName: "Kolitech",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full bg-[#0B0B0C] text-[#FAFAFA] antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-[#E2B875] selection:text-[#0B0B0C]">
        <Header />
        <main className="flex-grow pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
