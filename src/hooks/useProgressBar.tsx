"use client";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import { useCallback, useEffect, useReducer, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

NProgress.configure({
  showSpinner: false,
  easing: "ease",
  speed: 500,
});

export default function useProgressBar() {
  const params = useSearchParams();
  const start = useCallback(() => {
    NProgress.start();
  }, []);
  const stop = useCallback(() => {
    NProgress.done(true);
  }, []);
  useEffect(() => {
    stop();
  }, [params, stop]);
  return {
    start,
    stop,
  };
}
