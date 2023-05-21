import clsx from "clsx";
import Avatar from "./avatar";
import DownLoadCVButton from "./download_cv_button";
import Name from "./name";
import SocialButtons from "./social_buttons";
import Glass from "@components/Glass";
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
  metadataBase: new URL("https://acme.com"),
};
export default function Home() {
  return (
    <main className={clsx(["flex w-full flex-col items-center justify-center"])}>
      <Avatar />
      <Name />
      <SocialButtons />
      <DownLoadCVButton />
    </main>
  );
}
