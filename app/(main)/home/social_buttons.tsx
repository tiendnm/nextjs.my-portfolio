import {
  mdiFacebook,
  mdiGithub,
  mdiLinkedin,
  mdiTwitter,
} from "@mdi/js";
import Icon from "@mdi/react";
import clsx from "clsx";
import Link from "next/link";

const SocialButtons = () => {
  return (
    <div className="flex h-16 items-center gap-3 text-2xl">
      <Link
        href={"https://www.linkedin.com/in/tiendnm/"}
        target="_blank"
        data-aos="fade-left"
        data-aos-duration="500"
        className={clsx([
          "h-10 w-10",
          "bg-white text-[#0A66C2]",
          "dark:bg-[#0A66C2] dark:text-white",
          "dark:hover:bg-white dark:hover:text-[#0A66C2]",
          "flex items-center justify-center",
          "rounded-md",
          "hover:bg-[#0A66C2] hover:text-white",
          "hover:h-11 hover:w-11 hover:text-3xl",
          "cursor-pointer",
          "shadow-lg shadow-[#0A66C2]/25 dark:shadow-white/25",
          "transition-all duration-300",
        ])}>
        <Icon
          path={mdiLinkedin}
          size={1}></Icon>
      </Link>
      <Link
        href={"https://github.com/tien-dnm"}
        data-aos="fade-left"
        data-aos-duration="400"
        target="_blank"
        className={clsx([
          "h-10 w-10",
          "bg-white text-gray-600",
          "dark:bg-gray-600 dark:text-white",
          "dark:hover:bg-white dark:hover:text-gray-600",
          "flex items-center justify-center",
          "rounded-md",
          "hover:bg-gray-600 hover:text-white",
          "hover:h-11 hover:w-11 hover:text-3xl",
          "cursor-pointer",
          "shadow-lg shadow-gray-600/25 dark:shadow-white/25",
          "transition-all duration-300",
        ])}>
        <Icon
          path={mdiGithub}
          size={1}></Icon>
      </Link>
      <Link
        href={"https://www.facebook.com/tien.dnm/"}
        target="_blank"
        data-aos="fade-left"
        data-aos-duration="300"
        className={clsx([
          "h-10 w-10",
          "bg-white text-[#0062E0]",
          "dark:bg-[#0062E0] dark:text-white",
          "dark:hover:bg-white dark:hover:text-[#0062E0]",
          "flex items-center justify-center",
          "rounded-md",
          "hover:bg-[#0062E0] hover:text-white",
          "hover:h-11 hover:w-11 hover:text-3xl",
          "cursor-pointer",
          "shadow-lg shadow-[#0062E0]/25 dark:shadow-white/25",
          "transition-all duration-300",
        ])}>
        <Icon
          path={mdiFacebook}
          size={1}></Icon>
      </Link>

      <Link
        href={"https://twitter.com/tien_dnm"}
        target="_blank"
        data-aos="fade-left"
        data-aos-duration="200"
        className={clsx([
          "h-10 w-10",
          "bg-white text-[#1C9AEF]",
          "dark:bg-[#1C9AEF] dark:text-white",
          "dark:hover:bg-white dark:hover:text-[#1C9AEF]",
          "flex items-center justify-center",
          "rounded-md",
          "hover:bg-[#1C9AEF] hover:text-white",
          "hover:h-11 hover:w-11 hover:text-3xl",
          "cursor-pointer",
          "shadow-lg shadow-[#1C9AEF]/25 dark:shadow-white/25",
          "transition-all duration-300",
        ])}>
        <Icon
          path={mdiTwitter}
          size={1}></Icon>
      </Link>
    </div>
  );
};
export default SocialButtons;
