"use client";
import Topbar from "@components/admin/Topbar";
import { useSession } from "@services/auth";
import { api_base_url } from "@utils/url";
import ListPost from "./postList";
import { Suspense } from "react";

const Post = () => {
  // const { data, status } = useSession({
  //   required: true,
  // });
  // if (status === "loading") {
  //   return <div className="text-red-500">Loading....</div>;
  // }
  return (
    <>
      <Topbar canGoBack>QUẢN LÝ BÀI VIẾT</Topbar>
      <div className=" px-3 pt-20 pb-8 ">
        <Suspense fallback={<div>Loading...</div>}>
          {/* @ts-expect-error Async Server Component */}
          <ListPost />
        </Suspense>
      </div>
    </>
  );
};
export default Post;
