"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import tienfit from "../public/tien-fit.png";
const FirstLoading = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading && (
        <div className="z-50 flex fixed w-full h-full top-0 left-0 justify-center items-center  bg-gradient-to-r from-[#d4efff] to-[#d998ff] dark:from-[#001441] dark:to-[#38002c]">
          <Image src={tienfit} alt="Logo" className="w-20 h-20" />
        </div>
      )}
    </>
  );
};
export default FirstLoading;
