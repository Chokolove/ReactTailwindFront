import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import HeroBanner from "@/components/HeroBanner";

export const metadata: Metadata = {
  title: "Front React",
  description: "Front End React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <main>
          <HeroBanner />
          <div className="p-4 max-w-7xl mx-auto min-h-screen">
            <NavBar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
