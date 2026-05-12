<<<<<<< HEAD
import localFont from "next/font/local";
=======
import { Inter, Audiowide, Michroma } from "next/font/google";
>>>>>>> b365d88 (upasana 12/05/2026)
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

<<<<<<< HEAD
const snasm = localFont({
  src: [
    {
      path: "./fonts/Snasm-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
=======
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
>>>>>>> b365d88 (upasana 12/05/2026)
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
<<<<<<< HEAD
    <html lang="en" className={snasm.variable}>
=======
    <html
      lang="en"
      className={`${inter.variable} ${audiowide.variable} ${michroma.variable}`}
    >
>>>>>>> b365d88 (upasana 12/05/2026)
      <body className="min-h-screen bg-asb-gray text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}