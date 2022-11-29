import clsx from "clsx";
import Link from "next/link";

const SocialButtons = () => {
  return (
    <div className="flex gap-3 text-2xl h-16 items-center">
      <Link
        href={"https://www.linkedin.com/in/tiendnm/"}
        target="_blank"
        className={clsx([
          "w-10 h-10",
          "bg-white text-[#0A66C2]",
          "dark:bg-[#0A66C2] dark:text-white",
          "dark:hover:bg-white dark:hover:text-[#0A66C2]",
          "flex justify-center items-center",
          "rounded-md",
          "hover:bg-[#0A66C2] hover:text-white",
          "hover:w-11 hover:h-11 hover:text-3xl",
          "cursor-pointer",
          "shadow-lg dark:shadow-white/25 shadow-[#0A66C2]/25",
          "transition-all duration-300",
        ])}
      >
        <i className="fa-brands fa-linkedin  "></i>
      </Link>
      <Link
        href={"https://github.com/tien-dnm"}
        target="_blank"
        className={clsx([
          "w-10 h-10",
          "bg-white text-[#161B22]",
          "dark:bg-gray-600 dark:text-white",
          "dark:hover:bg-white dark:hover:text-[#161B22]",
          "flex justify-center items-center",
          "rounded-md",
          "hover:text-white hover:bg-[#161B22]",
          "hover:w-11 hover:h-11 hover:text-3xl",
          "cursor-pointer",
          "shadow-lg dark:shadow-white/25 shadow-[#161B22]/25",
          "transition-all duration-300",
        ])}
      >
        <i className="fa-brands fa-github"></i>
      </Link>
      <Link
        href={"https://www.facebook.com/tien.dnm/"}
        target="_blank"
        className={clsx([
          "w-10 h-10",
          "bg-white text-[#0062E0]",
          "dark:bg-[#0062E0] dark:text-white",
          "dark:hover:bg-white dark:hover:text-[#0062E0]",
          "flex justify-center items-center",
          "rounded-md",
          "hover:bg-[#0062E0] hover:text-white",
          "hover:w-11 hover:h-11 hover:text-3xl",
          "cursor-pointer",
          "shadow-lg dark:shadow-white/25 shadow-[#0062E0]/25",
          "transition-all duration-300",
        ])}
      >
        <i className="fa-brands fa-facebook"></i>
      </Link>

      <Link
        href={"https://twitter.com/tien_dnm"}
        target="_blank"
        className={clsx([
          "w-10 h-10",
          "bg-white text-[#1C9AEF]",
          "dark:bg-[#1C9AEF] dark:text-white",
          "dark:hover:bg-white dark:hover:text-[#1C9AEF]",
          "flex justify-center items-center",
          "rounded-md",
          "hover:bg-[#1C9AEF] hover:text-white",
          "hover:w-11 hover:h-11 hover:text-3xl",
          "cursor-pointer",
          "shadow-lg dark:shadow-white/25 shadow-[#1C9AEF]/25",
          "transition-all duration-300",
        ])}
      >
        <i className="fa-brands fa-twitter "></i>
      </Link>
    </div>
  );
};
export default SocialButtons;
