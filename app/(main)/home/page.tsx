import clsx from "clsx";
import Avatar from "./avatar";
import DownLoadCVButton from "./download_cv_button";
import Name from "./name";
import SocialButtons from "./social_buttons";
export default function Home() {
  return (
    <div
      className={clsx([
        "h-full  px-4 pb-5    sm:px-5 md:px-10  lg:px-20 lg:pb-0",
        "bg-white/60 backdrop-blur-md transition-colors duration-500 dark:bg-[#111111]/60  lg:rounded-2xl ",
        " flex h-[90vh] flex-1 justify-center lg:h-[71vh] lg:flex-initial",
      ])}
      data-aos="fade-right"
      data-aos-duration="200">
      <div className={clsx(["flex flex-col items-center justify-center"])}>
        <Avatar />
        <Name />
        <SocialButtons />
        <DownLoadCVButton />
      </div>
    </div>
  );
}
