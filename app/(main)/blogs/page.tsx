"use client";
import Glass from "@components/Glass";
import Heading from "@components/Heading";
import Paragraph from "@components/Paragraph";
import { BLUR_URL } from "@variables";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5-custom-build";
export const metadata = {
  title: "Blogs",
  openGraph: {
    title: "Blogs - Tiến Đỗ",
    description: "Blog cá nhân của Tiến Đỗ",
    url: "https://www.tien-dnm.com/blogs",
    siteName: "Blogs - Tiến Đỗ",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 627,
      },
    ],
    locale: "vi-VN",
    type: "website",
  },
};
const Blogs = () => {
  return (
    <>
      <div className="w-full">
        <Heading
          level={1}
          className="mb-5 text-center font-extrabold uppercase">
          Blogs
        </Heading>
        <main className="flex flex-col gap-5">
          {/* <CKEditor
            editor={ClassicEditor as any}
            data="<p>Hello from CKEditor 5!</p>"
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.data.get();
              console.log(data);
            }}
            // onBlur={(event, editor) => {
            //   console.log("Blur.", editor);
            // }}
            // onFocus={(event, editor) => {
            //   console.log("Focus.", editor);
            // }}
          /> */}
        </main>
      </div>
    </>
  );
};

export default Blogs;
