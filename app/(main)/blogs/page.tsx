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
        <main className="flex flex-col gap-5"></main>
      </div>
    </>
  );
};

export default Blogs;
