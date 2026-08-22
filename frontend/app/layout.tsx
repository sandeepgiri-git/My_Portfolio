import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CustomCursor from "@/components/ui/CustomCursor";
import BackToTop from "@/components/ui/BackToTop";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sandeep Giri — Full-Stack Developer & Creative Engineer",
  description: "Full-Stack Developer specializing in React, Next.js, Node.js, and Three.js. Building performant, scalable digital experiences. Available for freelance projects.",
  keywords: ["Full-Stack Developer", "React Developer", "Next.js", "Freelance Developer", "Sandeep Giri", "Web Developer India"],
  authors: [{ name: "Sandeep Giri" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, outfit.variable)} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased font-sans overflow-x-hidden selection:bg-accent/30 selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ScrollProgress />
          <CustomCursor />
          <SmoothScroll>{children}</SmoothScroll>
          <BackToTop />
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
