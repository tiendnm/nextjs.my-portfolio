"use client";
import FirstLoading from "../../components/preloading";
import Nav from "../../components/nav";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FirstLoading />
      <div className="w-full max-w-full 2xl:max-w-7xl lg:max-w-5xl mx-auto z-40">
        <Nav />
        {children}
      </div>
    </>
  );
}
