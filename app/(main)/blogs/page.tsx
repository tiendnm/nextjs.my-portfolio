import { isDevelopment } from "@utils/url";
import Image from "next/image";
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
      {isDevelopment ? (
        <main className="mb-6 mt-[40px] grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          <div
            style={{
              background: "rgb(255, 240, 240)",
            }}
            className="mb-2 h-full rounded-lg p-5 dark:border-2 dark:border-[#212425]">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={"https://i.postimg.cc/cLYSQqVS/powerapps.png"}
                alt="blog"
                width="310"
                className="w-full transform cursor-pointer rounded-lg transition duration-200 ease-in-out hover:scale-110"
                height="310"
              />
            </div>
            <div className="text-tiny text-gray-lite mt-4 flex dark:text-[#A6A6A6]">
              <span>177 April</span>
              <span className="after:bg-gray-lite relative transform pl-6 after:absolute after:left-2 after:top-[50%] after:h-1 after:w-1 after:-translate-y-1/2 after:rounded-full">
                PowerApps
              </span>
            </div>
            <h3 className="mt-3 cursor-pointer pr-4 text-lg font-medium transition duration-300 hover:text-[#FA5252] dark:text-white dark:hover:text-[#FA5252]">
              Tiêu chuẩn Power Apps: Quy ước đặt tên.
            </h3>
          </div>
          <div
            style={{
              background: "rgb(255, 240, 240)",
            }}
            className="mb-2 h-full rounded-lg p-5 dark:border-2 dark:border-[#212425]">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={"https://i.postimg.cc/cLYSQqVS/powerapps.png"}
                alt="blog"
                width="310"
                className="w-full transform cursor-pointer rounded-lg transition duration-200 ease-in-out hover:scale-110"
                height="310"
              />
            </div>
            <div className="text-tiny text-gray-lite mt-4 flex dark:text-[#A6A6A6]">
              <span>177 April</span>
              <span className="after:bg-gray-lite relative transform pl-6 after:absolute after:left-2 after:top-[50%] after:h-1 after:w-1 after:-translate-y-1/2 after:rounded-full">
                PowerApps
              </span>
            </div>
            <h3 className="mt-3 cursor-pointer pr-4 text-lg font-medium transition duration-300 hover:text-[#FA5252] dark:text-white dark:hover:text-[#FA5252]">
              Tiêu chuẩn Power Apps: Quy ước đặt tên.
            </h3>
          </div>
          <div
            style={{
              background: "rgb(255, 240, 240)",
            }}
            className="mb-2 h-full rounded-lg p-5 dark:border-2 dark:border-[#212425]">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={"https://i.postimg.cc/cLYSQqVS/powerapps.png"}
                alt="blog"
                width="310"
                className="w-full transform cursor-pointer rounded-lg transition duration-200 ease-in-out hover:scale-110"
                height="310"
              />
            </div>
            <div className="text-tiny text-gray-lite mt-4 flex dark:text-[#A6A6A6]">
              <span>177 April</span>
              <span className="after:bg-gray-lite relative transform pl-6 after:absolute after:left-2 after:top-[50%] after:h-1 after:w-1 after:-translate-y-1/2 after:rounded-full">
                PowerApps
              </span>
            </div>
            <h3 className="mt-3 cursor-pointer pr-4 text-lg font-medium transition duration-300 hover:text-[#FA5252] dark:text-white dark:hover:text-[#FA5252]">
              Tiêu chuẩn Power Apps: Quy ước đặt tên.
            </h3>
          </div>
          <div
            style={{
              background: "rgb(255, 240, 240)",
            }}
            className="mb-2 h-full rounded-lg p-5 dark:border-2 dark:border-[#212425]">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={"https://i.postimg.cc/cLYSQqVS/powerapps.png"}
                alt="blog"
                width="310"
                className="w-full transform cursor-pointer rounded-lg transition duration-200 ease-in-out hover:scale-110"
                height="310"
              />
            </div>
            <div className="text-tiny text-gray-lite mt-4 flex dark:text-[#A6A6A6]">
              <span>177 April</span>
              <span className="after:bg-gray-lite relative transform pl-6 after:absolute after:left-2 after:top-[50%] after:h-1 after:w-1 after:-translate-y-1/2 after:rounded-full">
                PowerApps
              </span>
            </div>
            <h3 className="mt-3 cursor-pointer pr-4 text-lg font-medium transition duration-300 hover:text-[#FA5252] dark:text-white dark:hover:text-[#FA5252]">
              Tiêu chuẩn Power Apps: Quy ước đặt tên.
            </h3>
          </div>
          <div
            style={{
              background: "rgb(255, 240, 240)",
            }}
            className="mb-2 h-full rounded-lg p-5 dark:border-2 dark:border-[#212425]">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={"https://i.postimg.cc/cLYSQqVS/powerapps.png"}
                alt="blog"
                width="310"
                className="w-full transform cursor-pointer rounded-lg transition duration-200 ease-in-out hover:scale-110"
                height="310"
              />
            </div>
            <div className="text-tiny text-gray-lite mt-4 flex dark:text-[#A6A6A6]">
              <span>177 April</span>
              <span className="after:bg-gray-lite relative transform pl-6 after:absolute after:left-2 after:top-[50%] after:h-1 after:w-1 after:-translate-y-1/2 after:rounded-full">
                PowerApps
              </span>
            </div>
            <h3 className="mt-3 cursor-pointer pr-4 text-lg font-medium transition duration-300 hover:text-[#FA5252] dark:text-white dark:hover:text-[#FA5252]">
              Tiêu chuẩn Power Apps: Quy ước đặt tên.
            </h3>
          </div>
          <div
            style={{
              background: "rgb(255, 240, 240)",
            }}
            className="mb-2 h-full rounded-lg p-5 dark:border-2 dark:border-[#212425]">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={"https://i.postimg.cc/cLYSQqVS/powerapps.png"}
                alt="blog"
                width="310"
                className="w-full transform cursor-pointer rounded-lg transition duration-200 ease-in-out hover:scale-110"
                height="310"
              />
            </div>
            <div className="text-tiny text-gray-lite mt-4 flex dark:text-[#A6A6A6]">
              <span>177 April</span>
              <span className="after:bg-gray-lite relative transform pl-6 after:absolute after:left-2 after:top-[50%] after:h-1 after:w-1 after:-translate-y-1/2 after:rounded-full">
                PowerApps
              </span>
            </div>
            <h3 className="mt-3 cursor-pointer pr-4 text-lg font-medium transition duration-300 hover:text-[#FA5252] dark:text-white dark:hover:text-[#FA5252]">
              Tiêu chuẩn Power Apps: Quy ước đặt tên.
            </h3>
          </div>
        </main>
      ) : (
        <></>
      )}
    </>
  );
};

export default Blogs;
