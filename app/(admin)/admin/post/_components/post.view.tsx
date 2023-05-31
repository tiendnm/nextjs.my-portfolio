"use client";

import { useAdminContext } from "@contexts/AdminContext";
import useProgressBar from "@hooks/useProgressBar";
import { mdiPencil, mdiTrashCan } from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "antd";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { Post } from "../_model/post.model";
import PostContentParser from "./post.content.parser";

export default function PostView(props: Post) {
  const { _id, description, title, publish_date, content, author } = props;
  useAdminContext({
    canGoBack: true,
    canGoHome: true,
    pageTitle: "XEM TRƯỚC BÀI VIẾT",
  });
  const progressbar = useProgressBar();

  const router = useRouter();

  const handleDelete = useCallback(async () => {
    progressbar.start();
    router.push(`admin/post/delete/${_id}`);
  }, [_id, progressbar, router]);

  const handleUpdate = useCallback(async () => {
    progressbar.start();
    router.push(`admin/post/update/${_id}`);
  }, [_id, progressbar, router]);

  return (
    <>
      <div className="mx-auto w-full max-w-2xl p-4 ">
        <h1 className="mb-2 text-5xl font-bold">{title}</h1>
        <h2 className="mb-4 text-4xl text-gray-600">{description}</h2>
        <div className="mb-4 flex items-center justify-between text-xl">
          <p className="text-gray-700">Tác giả: {author}</p>
          <p className=" text-gray-600">
            Ngày xuất bản: {moment(publish_date).format("DD/MM/YYYY")}
          </p>
        </div>
        <PostContentParser content={content} />
      </div>
      <div className="fixed bottom-5 right-5 flex gap-2">
        <Button
          danger
          onClick={handleDelete}
          shape="circle"
          icon={
            <Icon
              path={mdiTrashCan}
              size={1}
            />
          }
          size={"large"}
        />
        <Button
          onClick={handleUpdate}
          type="primary"
          shape="circle"
          icon={
            <Icon
              path={mdiPencil}
              size={1}
            />
          }
          size={"large"}
        />
      </div>
    </>
  );
}
