"use client";

import { useAdminContext } from "@contexts/AdminContext";
import Image from "next/image";

export default function PostNotfound() {
  const {} = useAdminContext({
    canGoBack: true,
    canGoHome: true,
    pageTitle: "KHÔNG TÌM THẤY BÀI VIẾT",
  });
  return (
    <>
      <Image
        src={"/undraw_page_not_found.svg"}
        alt="post not found"
        width={"300"}
        height={"300"}
      />
    </>
  );
}
