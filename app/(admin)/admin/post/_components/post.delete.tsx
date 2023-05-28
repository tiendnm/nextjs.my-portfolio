"use client";
import { useAdminContext } from "@contexts/AdminContext";
import useProgressBar from "@hooks/useProgressBar";
import { useSession } from "@services/auth";
import { Button } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PostDelete({ id }: { id: string }) {
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
        <Button size={"middle"}>Xoá</Button>
        <Button
          type="primary"
          size={"middle"}>
          Quay lại
        </Button>
      </div>
    </>
  );
}
