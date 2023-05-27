"use client";
import { Avatar, Button, DatePicker, Input } from "antd";
import { Post } from "./postModel";
import ClassicEditor from "ckeditor5-custom-build";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useCallback, useEffect, useState } from "react";
import { useAdminContext } from "@contexts/AdminContext";
import Image from "next/image";
import { BLUR_URL } from "@variables";
import { mdiTrashCan, mdiContentSave } from "@mdi/js";
import Icon from "@mdi/react";
import useApiAxios from "@hooks/useApiAxios";
import dayjs from "dayjs";
import { slugify } from "@utils/datatype";
import { useRouter } from "next/navigation";
import useProgressBar from "@hooks/useProgressBar";
export default function PostForm({
  title,
  _id,
  author,
  content,
  publish_date,
  sub_title,
  slug,
  thumbnail_link,
}: Post) {
  useAdminContext({
    canGoBack: true,
    canGoHome: true,
    pageTitle: "BÀI VIẾT",
  });
  const router = useRouter();
  const progressBar = useProgressBar();

  const formType = _id ? "update" : "create";
  const [post, setPost] = useState<Post>({
    title,
    _id,
    author,
    content,
    publish_date,
    sub_title,
    slug,
    thumbnail_link,
  });
  const api = useApiAxios();
  useEffect(() => {
    setPost({
      title,
      _id,
      author,
      content,
      publish_date,
      sub_title,
      slug,
      thumbnail_link,
    });
  }, [_id, author, content, publish_date, slug, sub_title, thumbnail_link, title]);

  const updatePost = useCallback(
    (key: keyof Post, value: Post[keyof Post]) => {
      const newPost = { ...post };
      newPost[key] = value as any as never;
      setPost(newPost);
    },
    [post]
  );

  const handleSave = useCallback(async () => {
    const clonePost = { ...post };
    clonePost.slug = slugify(title);

    if (formType === "create") {
      const newPost = await api.post(`/v1/post`, clonePost);
      console.log(newPost);
      // router.push("admin/post/")
    } else {
      const res = await api.patch(`/v1/post/${post._id}`, clonePost);
      const updatedPost = res.data as Post;
      setPost(updatedPost);
    }
  }, [api, formType, post, title]);
  return (
    <>
      <form className="flex flex-col items-center gap-2 pb-4">
        <div className="relative h-32 w-32">
          <Image
            src={post.thumbnail_link || "/undraw_upload_image.svg"}
            blurDataURL={BLUR_URL}
            placeholder="blur"
            quality={60}
            fill
            alt="thumbnail_link"
          />
        </div>
        <div className="w-full">
          <label>Đường dẫn thumbnail:</label>
          <Input
            placeholder="Đường dẫn thumbnail"
            value={post.thumbnail_link}
            onChange={(e) => {
              const data = e.target.value;
              updatePost("thumbnail_link", data);
            }}
          />
        </div>
        <div className="w-full">
          <label>Tiêu dề:</label>
          <Input
            placeholder="Tiêu dề"
            value={post.title}
            onChange={(e) => {
              const data = e.target.value;
              updatePost("title", data);
            }}
          />
        </div>
        <div className="w-full">
          <label>Tiêu dề phụ:</label>
          <Input
            placeholder="Tiêu dề phụ"
            value={post.sub_title}
            onChange={(e) => {
              const data = e.target.value;
              updatePost("sub_title", data);
            }}
          />
        </div>
        <div className="w-full">
          <label>Ngày phát hành:</label>
          <DatePicker
            className="w-full"
            placeholder="Ngày phát hành"
            value={dayjs(post.publish_date)}
            onChange={(date) => {
              const data = date;
              updatePost("publish_date", data?.toDate());
            }}
          />
        </div>
        <div className="w-full">
          <label>Tác giả:</label>
          <Input
            placeholder="Tác giả"
            value={post.author}
            onChange={(e) => {
              const data = e.target.value;
              updatePost("author", data);
            }}
          />
        </div>
        <div className="w-full">
          <label>Nội dung:</label>
          <CKEditor
            editor={ClassicEditor as any}
            onChange={(event, editor) => {
              const data = editor.data.get();
              updatePost("content", data);
            }}
            data={post.content}
          />
        </div>
      </form>
      <div className="fixed bottom-5 right-5 flex gap-2">
        <Button
          danger
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
          onClick={handleSave}
          type="primary"
          className="!bg-emerald-700"
          shape="circle"
          icon={
            <Icon
              path={mdiContentSave}
              size={1}
            />
          }
          size={"large"}
        />
      </div>
    </>
  );
}
