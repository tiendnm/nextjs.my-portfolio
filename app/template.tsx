"use client";
import useProgressBar from "@hooks/useProgressBar";

export default function RootTemplate({ children }: { children: React.ReactNode }) {
  useProgressBar();
  return <>{children}</>;
}
