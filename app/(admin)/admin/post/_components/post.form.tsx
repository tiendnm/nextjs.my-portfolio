"use client";
import { Avatar, Button, DatePicker, Input, Spin, notification } from "antd";
import { Post } from "../_model/post.model";
import ClassicEditor from "ckeditor5-custom-build";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useCallback, useEffect, useState, useTransition } from "react";
import { useAdminContext } from "@contexts/AdminContext";
import Image from "next/image";
import { BLUR_URL } from "@variables";
import { mdiTrashCan, mdiContentSave, mdiEye } from "@mdi/js";
import Icon from "@mdi/react";
import useApiAxios from "@hooks/useApiAxios";
import dayjs from "dayjs";
import { slugify } from "@utils/datatype";
import { useRouter } from "next/navigation";
import useProgressBar from "@hooks/useProgressBar";
import { useSession } from "@services/auth";
import useNotification from "antd/es/notification/useNotification";
import CustomCKEditor from "@components/CustomCKEditor";
export default function PostForm({
  title,
  _id,
  author,
  content,
  publish_date,
  description,
  slug,
  thumbnail_link,
}: Partial<Post>) {
  const formType = _id ? "update" : "create";
  const { setLoading } = useAdminContext({
    canGoBack: true,
    canGoHome: true,
    pageTitle: formType === "create" ? "THÊM BÀI VIẾT" : "CHỈNH SỬA BÀI VIẾT",
  });
  const router = useRouter();
  const progressBar = useProgressBar();

  const [notiApi, contextHolder] = useNotification();

  const [post, setPost] = useState<Partial<Post>>({
    title,
    _id,
    author,
    content,
    publish_date,
    description,
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
      description,
      slug,
      thumbnail_link,
    });
  }, [
    _id,
    author,
    content,
    publish_date,
    slug,
    description,
    thumbnail_link,
    title,
  ]);

  const updatePost = useCallback(
    (key: keyof Post, value: Post[keyof Post]) => {
      const newPost = { ...post };
      newPost[key] = value as any as never;
      setPost(newPost);
    },
    [post]
  );
  const handlePreview = useCallback(() => {
    progressBar.start();
    setLoading(true);
    router.push(`admin/post/preview/${post._id}`);
  }, [post._id, progressBar, router, setLoading]);
  const handleDelete = useCallback(() => {
    progressBar.start();
    setLoading(true);
    router.push(`admin/post/delete/${post._id}`);
  }, [post._id, progressBar, router, setLoading]);
  const handleSave = useCallback(async () => {
    const clonePost = { ...post };
    clonePost.slug = slugify(post.title ?? "");

    if (!clonePost.title) {
      notiApi.warning({
        message: `Cảnh báo`,
        description: "Vui lòng nhập tiêu đề bài viết",
        placement: "bottom",
      });
      return;
    }
    if (!clonePost.description) {
      notiApi.warning({
        message: `Cảnh báo`,
        description: "Vui lòng nhập diễn giải bài viết",
        placement: "bottom",
      });
      return;
    }
    if (!clonePost.content) {
      notiApi.warning({
        message: `Cảnh báo`,
        description: "Vui lòng nhập nội dung bài viết",
        placement: "bottom",
      });
      return;
    }
    if (!clonePost.author) {
      notiApi.warning({
        message: `Cảnh báo`,
        description: "Vui lòng nhập tác giả bài viết",
        placement: "bottom",
      });
      return;
    }
    if (!clonePost.publish_date) {
      notiApi.warning({
        message: `Cảnh báo`,
        description: "Vui lòng chọn ngày phát hành",
        placement: "bottom",
      });
      return;
    }
    try {
      setLoading(true);
      if (formType === "create") {
        const res = await api.post(`/v1/post`, clonePost);
        const newPost = res.data as Post;
        notiApi.success({
          message: `Thành công`,
          description: "Cảm ơn bạn đã đăng bài viết này",
          placement: "bottom",
        });
        progressBar.start();
        router.push(`admin/post/update/${newPost._id}`);
      } else {
        const res = await api.patch(`/v1/post/${post._id}`, clonePost);
        const updatedPost = res.data as Post;
        setPost(updatedPost);
        notiApi.success({
          message: `Thành công`,
          description: "Cảm ơn bạn đã chỉnh sửa bài viết này",
          placement: "bottom",
        });
        setLoading(false);
      }
    } catch (error) {
      notiApi.error({
        message: `Lỗi`,
        description: "Đã có lỗi xảy ra",
        placement: "bottom",
      });
      console.error(error);
      setLoading(false);
    }
  }, [api, formType, notiApi, post, progressBar, router, setLoading]);

  const { status } = useSession({
    required: true,
  });

  if (status === "loading") {
    return <div className="text-green-500">Authorizing....</div>;
  }
  return (
    <>
      {contextHolder}
      <form className="flex flex-col items-center gap-2 pb-4">
        <div className="relative h-32 w-32">
          <Image
            src={post.thumbnail_link || "/undraw_upload_image.svg"}
            blurDataURL={BLUR_URL}
            placeholder="blur"
            quality={60}
            fill
            alt="thumbnail_link"
            sizes="100px"
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
          <label>Diễn giải:</label>
          <Input.TextArea
            rows={3}
            placeholder="Tiêu dề phụ"
            value={post.description}
            onChange={(e) => {
              const data = e.target.value;
              updatePost("description", data);
            }}
          />
        </div>
        <div className="w-full">
          <label>Ngày phát hành:</label>
          <DatePicker
            className="w-full"
            placeholder="Ngày phát hành"
            value={post.publish_date && dayjs(post.publish_date)}
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
          <CustomCKEditor
            onChange={(text: string | null | undefined) => {
              updatePost("content", `${text}`);
            }}
            data={post.content}
          />
        </div>
      </form>
      <div className="fixed bottom-5 right-5 flex gap-2">
        <Button
          danger
          shape="circle"
          onClick={handleDelete}
          icon={
            <Icon
              path={mdiTrashCan}
              size={1}
            />
          }
          size={"large"}
        />
        {formType === "update" && (
          <Button
            shape="circle"
            onClick={handlePreview}
            icon={
              <Icon
                path={mdiEye}
                size={1}
              />
            }
            size={"large"}
          />
        )}
        <Button
          onClick={handleSave}
          type="primary"
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
