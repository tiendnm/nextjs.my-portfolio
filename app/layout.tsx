import "./globals.css";
import { cabin } from "@configs/fonts";

import "sal.js/dist/sal.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={cabin.className}>{children}</body>
    </html>
  );
}
