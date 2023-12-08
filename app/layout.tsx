import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import Providers from "@/components/Providers";
import { AppBar } from "@/components/appbar/app-bar";
import Footer from "@/components/footer";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>
          <AppBar />
          <div className="pt-10 lg:pt-16">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
