import "./globals.css";
import "aos/dist/aos.css";
import { Cabin } from "@next/font/google";

const cabin = Cabin({
  subsets: ["vietnamese"],
  variable: "--cabin-font",
  fallback: ["sans-serif"],
  weight: ["400", "500", "600", "700"],
  display: "auto",
  style: ["italic", "normal"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={cabin.className}>{children}</body>
    </html>
  );
}
