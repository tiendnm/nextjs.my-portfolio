"use client";
import Topbar from "@components/admin/Topbar";
import { useSession } from "@services/auth";
import { api_base_url } from "@utils/url";
import ListPost from "./postList";
import { Suspense } from "react";
import { Button, Card, Spin } from "antd";
import { mdiTrashCan, mdiContentSave, mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import { useAdminContext } from "@contexts/AdminContext";

const Post = () => {
  useAdminContext({
    canGoBack: true,
    canGoHome: true,
    pageTitle: "BÀI VIẾT",
  });

  return (
    <>
      <Card className="flex w-full flex-col items-stretch justify-center">
        <Suspense fallback={<Spin className="w-full py-10" />}>
          {/* @ts-expect-error Async Server Component */}
          <ListPost />
        </Suspense>
      </Card>
      <div className="fixed bottom-5 right-5 flex gap-2">
        <Button
          type="primary"
          shape="circle"
          icon={
            <Icon
              path={mdiPlus}
              size={1}
            />
          }
          size={"large"}
        />
      </div>
    </>
  );
};
export default Post;
