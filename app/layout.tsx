import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "./ui/ThemeProvider";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Dreamhacker",
  description: "Study abroad oppotunities",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <NextTopLoader />
          {children}
          <div className="h-32 w-full border-[1px] mt-20 flex flex-col justify-center">
            <div className="max-w-3xl xl:max-w-7xl px-4 m-auto">
              <p>An T&T's product</p>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
