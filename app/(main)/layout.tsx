"use client";
import { AppContextProvider } from "@contexts/AppContext";
import Preloading from "../preloading";
import FooterNav from "./footer-nav";
import HeaderNav from "./header-nav";
import Three from "./three";
import Glass from "@components/Glass";
import clsx from "clsx";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppContextProvider>
        <Preloading />
        <Three />
        <div
          className={clsx([
            "inset-0 z-40 mx-auto flex max-w-full  lg:max-w-5xl 2xl:max-w-7xl",
            "flex-col flex-nowrap content-center items-stretch justify-start",
          ])}>
          <HeaderNav />
          <Glass>{children}</Glass>
          <FooterNav />
        </div>
      </AppContextProvider>
    </>
  );
}
