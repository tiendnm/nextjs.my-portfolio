import clsx from "clsx";
import Avatar from "./avatar";
import DownLoadCVButton from "./download_cv_button";
import Name from "./name";
import SocialButtons from "./social_buttons";
export const metadata = {
  title: "Trang chủ",
  openGraph: {
    title: "Trang chủ - Tiến Đỗ",
    description: "Website cá nhân của Tiến Đỗ",
    url: "https://www.tien-dnm.com",
    siteName: "Trang chủ - Tiến Đỗ",
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
export default function Home() {
  return (
    <div
      className={clsx([
        "h-full  px-4 pb-5 sm:px-5 md:px-10 lg:px-20 lg:pb-0",
        "bg-white/20 backdrop-blur-2xl transition-colors delay-300 duration-1000 dark:bg-gray-800/40 lg:rounded-2xl ",
        "border border-t-white/40 border-b-white/20 border-l-white/20 border-r-white/40",
        "dark:border-r-white/30 dark:border-l-white/10 dark:border-b-white/10 dark:border-t-white/30 ",
        "shadow-lg shadow-black/20",
        "flex h-[90vh] flex-1 justify-center lg:h-[71vh] lg:flex-initial",
      ])}>
      <div className={clsx(["flex flex-col items-center justify-center"])}>
        <Avatar />
        <Name />
        <SocialButtons />
        <DownLoadCVButton />
      </div>
    </div>
  );
}
