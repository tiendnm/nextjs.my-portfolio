"use client";
import { Input } from "antd";
import { Post } from "./postModel";
import ClassicEditor from "ckeditor5-custom-build";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useCallback, useEffect, useState } from "react";
export default function PostForm({
  title,
  _id,
  author,
  content,
  publish_date,
  sub_title,
}: Post) {
  const formType = _id ? "update" : "create";
  const [post, setPost] = useState<Post>({
    title,
    _id,
    author,
    content,
    publish_date,
    sub_title,
  });

  useEffect(() => {
    setPost({
      title,
      _id,
      author,
      content,
      publish_date,
      sub_title,
    });
  }, [_id, author, content, publish_date, sub_title, title]);

  const updatePost = useCallback(
    (key: keyof Post, value: Post[keyof Post]) => {
      const newPost = { ...post };
      newPost[key] = value as any as never;
      setPost(newPost);
    },
    [post]
  );

  return (
    <>
      <form
        action=""
        className="flex flex-col gap-2">
        <Input
          placeholder="Tiêu dề"
          value={post.title}
          onChange={(e) => {
            const data = e.target.value;
            updatePost("title", data);
          }}
        />
        <Input
          placeholder="Tiêu dề phụ"
          value={post.sub_title}
          onChange={(e) => {
            const data = e.target.value;
            updatePost("sub_title", data);
          }}
        />
        <CKEditor
          editor={ClassicEditor as any}
          onChange={(event, editor) => {
            const data = editor.data.get();
            updatePost("content", data);
          }}
          data={post.content}
        />
      </form>
    </>
  );
}
