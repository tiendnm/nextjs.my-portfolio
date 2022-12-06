"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
const Preloading = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-gradient-to-r from-[#d4efff] to-[#d998ff] ">
          <div className="absolute h-20 w-20">
            <Image
              priority
              fill
              src={"/preloading.svg"}
              quality={60}
              alt="Logo"
              sizes="5rem"
            />
          </div>
        </div>
      )}
    </>
  );
};
export default Preloading;
