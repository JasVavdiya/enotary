import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Merriweather, Lato, Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Primary typefaces
const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});

// Secondary typefaces
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-montserrat',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "eNotary - Secure Digital Notarization Services",
  description: "eNotary provides secure, legally compliant digital notarization services for individuals and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${merriweather.variable} 
          ${lato.variable} 
          ${montserrat.variable} 
          ${roboto.variable} 
          antialiased
        `}
      >
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
