"use client";

import CustomLink from "@components/CustomLink";
import { mdiPencil, mdiTrashCan } from "@mdi/js";
import Icon from "@mdi/react";
import moment from "moment";
import { MDXRemoteSerializeResult } from "next-mdx-remote/rsc";
import { Post } from "../postModel";
import MarkDownParser from "./mdParser";
import { useAdminContext } from "@contexts/AdminContext";

interface PostViewProps extends Post {
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
}

export default function PostView(props: PostViewProps) {
  const { _id, sub_title, title, publish_date, mdxSource } = props;
  useAdminContext({
    canGoBack: true,
    canGoHome: true,
    pageTitle: "XEM TRƯỚC BÀI VIẾT",
  });
  return (
    <>
      <div className="mx-auto max-w-2xl p-4">
        <h1 className="mb-2 text-3xl font-bold">{title}</h1>
        <h2 className="mb-4 text-xl text-gray-600">{sub_title}</h2>
        <div className="mb-4 flex items-center justify-between">
          <p className="text-gray-700">Tác giả: John Doe</p>
          <p className=" text-gray-600">
            Ngày xuất bản: {moment(publish_date).format("DD/MM/YYYY")}
          </p>
        </div>

        <div className="prose">
          <MarkDownParser source={mdxSource} />
        </div>
      </div>
      <div className="fixed bottom-5 right-5 flex gap-2">
        <button className=" flex h-12 w-12 items-center justify-center rounded-full border border-teal-700 text-teal-700">
          <Icon
            path={mdiTrashCan}
            size={1}
          />
        </button>
        <CustomLink
          href={`/admin/post/update/${_id}`}
          className="flex h-12 w-12  items-center justify-center rounded-full  bg-teal-700 text-white">
          <Icon
            path={mdiPencil}
            size={1}
          />
        </CustomLink>
      </div>
    </>
  );
}
