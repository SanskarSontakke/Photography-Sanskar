
import { Oswald, Open_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

/**
 * Font Configuration
 * Using Oswald for headings and Open Sans for body text to achieve the desired aesthetic.
 */
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

/**
 * RootLayout Component
 *
 * This is the global layout wrapper for the Next.js application.
 * It applies global font variables, CSS styles, and includes the CustomCursor component
 * that persists across the application.
 *
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout
 */
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
