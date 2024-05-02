import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Header/Navbar";
import Footer from "./_components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PIXEL FUSION",
  description: "Design Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
