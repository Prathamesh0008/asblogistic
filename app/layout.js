import { Inter, Audiowide, Michroma } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-audiowide",
});

const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-michroma",
});

export const metadata = {
  title: "ASB Logistics B.V. - Professional Logistics Solutions",
  description:
    "Professional logistics services including storage, inventory management, and fast order processing",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${audiowide.variable} ${michroma.variable}`}
    >
      <body className="min-h-screen bg-asb-gray text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}