"use client";
import FirstLoading from "../components/firstloading";
import Nav from "../components/nav";
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <FirstLoading />
        <div className="w-full max-w-full 2xl:max-w-7xl lg:max-w-5xl mx-auto z-40">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
