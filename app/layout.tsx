import "./globals.css";
import "sal.js/dist/sal.css";
import { cabin } from "@configs/fonts";

export const metadata = {
  title: {
    default: "Tiến Đỗ",
    template: "%s - Tiến Đỗ",
  },
  description: "Website cá nhân của Tiến Đỗ",
  referrer: "origin-when-crossorigin",
  keywords: ["Portfolio", "Lập trình", "Web cá nhân"],
  authors: "Tiến Đỗ",
  creator: "Tiến Đỗ",
  publisher: "Tiến Đỗ",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cabin.className}>{children}</body>
    </html>
  );
}
