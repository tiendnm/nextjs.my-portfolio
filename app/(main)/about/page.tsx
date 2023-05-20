import clsx from "clsx";
import Image from "next/image";
import PageTitle from "./page_title";
import PersonalInfo from "./personal_info";
import WhatIDo from "./what_i_do";
import WhoAmI from "./who_am_i";
export const metadata = {
  title: "Thông tin",
  openGraph: {
    title: "Thông tin - Tiến Đỗ",
    description: "Thông tin cá nhân của Tiến Đỗ",
    url: "https://www.tien-dnm.com/about",
    siteName: "Thông tin - Tiến Đỗ",
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
const About = () => {
  return (
    <div className=" lg:pb-16">
      <div
        className={clsx([
          "px-4 pb-5 sm:px-5 md:px-10 lg:px-20 lg:pb-0",
          "bg-white/20 backdrop-blur-2xl transition-colors delay-300 duration-1000 dark:bg-gray-800/40 lg:rounded-2xl ",
          "border border-t-white/40 border-b-white/20 border-l-white/20 border-r-white/40",
          "shadow-lg shadow-black/20",
          "dark:border-r-white/30 dark:border-l-white/10 dark:border-b-white/10 dark:border-t-white/30 ",
        ])}>
        <div className="py-12">
          {/* <PageTitle text={"Về tôi"} /> */}
          <div className="grid grid-cols-12 items-center md:gap-10 ">
            <div className="col-span-12 md:col-span-4">
              <Image
                data-sal="slide-right"
                data-sal-delay="300"
                data-sal-easing="ease-out-back"
                width={330}
                height={380}
                src={"/avatar-1.jpeg"}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                alt="avatar"
                className="mb-3 w-full overflow-hidden rounded-[35px] object-cover md:mb-0 md:h-[380px] md:w-[330px]"
              />
            </div>
            <div className="col-span-12 space-y-2.5 md:col-span-8">
              <WhoAmI />
              <PersonalInfo />
            </div>
          </div>
        </div>
        {/* <WhatIDo /> */}
      </div>
    </div>
  );
};

export default About;
