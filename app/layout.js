import { GeistSans, GeistMono } from "next/font/local"; // Use next/font/local
import "./globals.css";
import Navbar from "@/components/Navbar";

// Load GeistSans from local files
const geistSans = GeistSans({
  src: "./fonts/GeistVF.woff", // Use .woff2 for better compression
  variable: "--font-geist-sans",
  display: "swap",
});

// Load GeistMono from local files
const geistMono = GeistMono({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata = {
  title: "URL-Shortner - Your trusted URL shortener",
  description: "URL-Shortner helps you shorten your URLs easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-green-50`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
