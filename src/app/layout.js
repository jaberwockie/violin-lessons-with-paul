import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Violin Lessons With Paul",
  description: "Online violin lessons for students 13 and above.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}