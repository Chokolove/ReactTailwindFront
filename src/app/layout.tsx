import type { Metadata } from "next";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import NavBar from "@/components/NavBar";
import HeroSlider from "@/components/HeroSlider";

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
        className="antialiased font-roboto"
      >
        <main>
          <HeroSlider />
          <div className="min-h-screen">
            <NavBar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
