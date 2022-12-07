"use client";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
const Preloading = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div
      className={clsx([
        "z-50",
        "bg-gradient-transform",
        "h-full w-full",
        "flex items-center justify-center",
        "fixed top-0 left-0",
        !loading ? "invisible" : "visible",
      ])}
    >
      <div className="absolute h-20 w-20">
        <Image
          priority
          fill
          src={"/preloading.svg"}
          quality={60}
          alt="Logo"
          sizes="5rem"
          className={clsx([
            "transition-all",
            !loading ? "opacity-0" : "opacity-100",
          ])}
        />
      </div>
    </div>
  );
};
export default Preloading;
