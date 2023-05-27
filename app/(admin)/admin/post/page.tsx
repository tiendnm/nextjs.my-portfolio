"use client";
import Topbar from "@components/admin/Topbar";
import { useSession } from "@services/auth";
import { api_base_url } from "@utils/url";
import ListPost from "./postList";
import { Suspense } from "react";
import { Card, Spin } from "antd";
import { mdiTrashCan, mdiContentSave, mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";

const Post = () => {
  // const { data, status } = useSession({
  //   required: true,
  // });
  // if (status === "loading") {
  //   return <div className="text-red-500">Loading....</div>;
  // }
  return (
    <>
      <Topbar
        back
        home>
        QUẢN LÝ BÀI VIẾT
      </Topbar>
      <div className=" mx-auto w-full px-3 pt-20 pb-8 md:max-w-md">
        <Card className="flex flex-col items-stretch justify-center">
          <Suspense fallback={<Spin className="w-full py-10" />}>
            {/* @ts-expect-error Async Server Component */}
            <ListPost />
          </Suspense>
        </Card>
      </div>
      <div className="fixed bottom-5 right-5 flex gap-2">
        <button className=" flex h-12 w-12 items-center justify-center rounded-full border bg-teal-700 text-white">
          <Icon
            path={mdiPlus}
            size={1}
          />
        </button>
      </div>
    </>
  );
};
export default Post;
