"use client";
import { AppContextProvider } from "@contexts/AppContext";
import Preloading from "../preloading";
import FooterNav from "./footer-nav";
import HeaderNav from "./header-nav";
import Three from "./three";
import Glass from "@components/Glass";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppContextProvider>
        <Preloading />
        <Three />
        <div className="z-40 mx-auto flex h-full w-full max-w-full flex-col flex-nowrap content-center items-stretch justify-start lg:max-w-5xl 2xl:max-w-7xl">
          <HeaderNav />
          <Glass>{children}</Glass>
          <FooterNav />
        </div>
      </AppContextProvider>
    </>
  );
}
