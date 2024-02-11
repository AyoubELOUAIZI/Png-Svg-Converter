import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MyConverter SVG to PNG",
  description: "Effortlessly convert SVG images to PNG format with MyConverter. Enjoy high-quality conversions and a seamless user experience.",
  icons: {
    icon: "/svgpngLogo.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_TRACKING_ID="G-YY0D4QSBR9" />
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
