"use client";
import { useAdminContext } from "@contexts/AdminContext";
import useProgressBar from "@hooks/useProgressBar";
import { useSession } from "@services/auth";
import { Button } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { deletePost } from "../_fetch/post.fetch";
export default function PostDelete({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();
  const { status } = useSession({
    required: true,
  });
  const { setLoading } = useAdminContext({
    canGoBack: true,
    canGoHome: true,
    pageTitle: "XOÁ BÀI VIẾT",
  });

  const progressBar = useProgressBar();
  const navigate = useRouter();

  if (status === "loading") {
    return <div className="text-green-500">Authorizing....</div>;
  }
  return (
    <>
      <Image
        src={"/undraw_throw_away.svg"}
        width={"300"}
        height={"300"}
        alt="delete post"
        className="my-10"
      />
      <div className="mb-2 text-2xl font-semibold">
        Bạn có chắc chắn muốn xoá bài viết này?
      </div>
      <div className="flex w-full justify-center gap-2 ">
        <Button
          onClick={() =>
            startTransition(() => {
              setLoading(true);
              deletePost(id)
                .then(() => {
                  progressBar.start();
                  navigate.push("admin/post");
                })
                .catch(() => {
                  setLoading(false);
                });
            })
          }
          size={"middle"}>
          Xoá
        </Button>
        <Button
          type="primary"
          size={"middle"}>
          Quay lại
        </Button>
      </div>
    </>
  );
}
