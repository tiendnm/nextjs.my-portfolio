"use client";
import Preloading from "../preloading";
import Nav from "./nav";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Preloading />
      <div className="z-40 mx-auto w-full max-w-full lg:max-w-5xl 2xl:max-w-7xl">
        <Nav />
        {children}
      </div>
    </>
  );
}
