import "./globals.css";
import "aos/dist/aos.css";
import { cabin } from "@configs/fonts";

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
