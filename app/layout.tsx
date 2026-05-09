import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nagen Nayak | Full-Stack Developer",
  description:
    "Portfolio of Nagen Nayak — Full-Stack Developer specializing in React, Next.js, Node.js, Java, and Python. Building modern, scalable web applications.",
  keywords: ["Nagen Nayak", "Full-Stack Developer", "React Developer", "Next.js", "Portfolio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}