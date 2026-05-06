import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Tuoora ERP | Smart Institute Management System",
  description: "The ultimate institute management ERP for digital transformation. Smart, secure, and scalable.",
  icons: {
    icon: "/favicon.png",
  },
};

import FloatingActions from "../components/FloatingActions";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
