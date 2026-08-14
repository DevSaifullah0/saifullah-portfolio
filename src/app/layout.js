import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import BackgroundEffects from "../components/ui/BackgroundEffects";
import ScrollProgress from "../components/ui/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Saifullah | React Native Frontend Developer",
    template: "%s | Saifullah",
  },

  description:
    "Portfolio of Saifullah, a React Native Frontend Developer focused on building modern, responsive and user-friendly mobile applications using React Native and JavaScript.",

  keywords: [
    "Saifullah",
    "React Native Frontend Developer",
    "React Native Developer",
    "Mobile App Developer",
    "Frontend Developer",
    "JavaScript Developer",
    "React Native CLI",
    "NativeWind",
    "React Navigation",
    "REST API Integration",
    "Mobile UI Developer",
    "Portfolio",
  ],

  authors: [
    {
      name: "Saifullah",
    },
  ],

  openGraph: {
    title: "Saifullah | React Native Frontend Developer",

    description:
      "React Native Frontend Developer portfolio showcasing modern mobile applications, responsive interfaces and real-world frontend projects.",

    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black font-sans text-white antialiased`}
      >
        <ScrollProgress />

        <BackgroundEffects />

        <Navbar />

        <div className="relative z-10">{children}</div>

        <Footer />
      </body>
    </html>
  );
}