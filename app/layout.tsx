import type { Metadata } from "next";
import { Open_Sans, Roboto, Yellowtail } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import Newsletter from "@/components/Newsletter/Newsletter";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});
const openSans = Open_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});
const yellowTail = Yellowtail({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Organick",
  icons: "/img/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans} ${roboto} ${yellowTail}`}>
        <div className="container">
          <Navbar />
          {children}
          <Newsletter />
          <Footer />
        </div>
      </body>
    </html>
  );
}
