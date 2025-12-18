
import { Oswald, Open_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "Sanskar Sontakke | Photography",
  description: "High-end creative photography portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${oswald.variable} ${openSans.variable} antialiased bg-black text-white`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
