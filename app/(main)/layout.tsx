"use client";
import Preloading from "../preloading";
import FooterNav from "./footer-nav";
import HeaderNav from "./header-nav";
import Three from "./three";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Preloading />
      <Three />
      <div className="z-40 mx-auto flex w-full max-w-full flex-col flex-nowrap content-center items-center justify-start lg:max-w-5xl 2xl:max-w-7xl">
        <HeaderNav />
        {children}
        <FooterNav />
      </div>
    </>
  );
}
