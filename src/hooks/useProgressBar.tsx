"use client";
import NProgress from "nprogress";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

NProgress.configure({
  showSpinner: false,
  easing: "ease",
  speed: 300,
});

const start = () => {
  NProgress.start();
};
const stop = () => {
  NProgress.done(true);
};

export default function useProgressBar() {
  const params = useSearchParams();
  //-----------------------------------------------
  useEffect(() => {
    stop();
  }, [params]);

  return {
    start,
    stop,
  };
}
