"use client";
import { useAdminContext } from "@contexts/AdminContext";
import { mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import { useSession } from "@services/auth";
import { Button, Card, Spin } from "antd";
import { Suspense } from "react";
import ListPost from "./postList";
import useProgressBar from "@hooks/useProgressBar";
import { useRouter } from "next/navigation";

const Post = () => {
  useAdminContext({
    canGoBack: true,
    canGoHome: true,
    pageTitle: "BÀI VIẾT",
  });
  const progressBar = useProgressBar();
  const router = useRouter();
  const { status } = useSession({
    required: true,
  });
  if (status === "loading") {
    return <div className="text-green-500">Authorizing....</div>;
  }
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
          onClick={() => {
            progressBar.start();
            router.push("/admin/post/create");
          }}
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
