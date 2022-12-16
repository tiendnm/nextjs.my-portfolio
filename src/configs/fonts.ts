import { Cabin } from "@next/font/google";

const cabin = Cabin({
  subsets: ["vietnamese"],
  variable: "--cabin-font",
  fallback: ["sans-serif"],
  weight: ["400", "500", "600", "700"],
  display: "auto",
  style: ["italic", "normal"],
});

export { cabin };
