import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh] xl:h-[71vh] justify-center aos-init aos-animate">
        <div>
          <Image
            width={300}
            height={300}
            src={"/avatar-1.jpeg"}
            alt="avatar"
            className="rounded-full w-56 h-56 2xl:w-60 2xl:h-60"
          ></Image>
        </div>
        <div
          className={clsx([
            "text-black dark:text-white",
            "font-medium",
            "mt-6 mb-1 text-3xl",
          ])}
        >
          Đỗ Ngọc Minh Tiến
        </div>
        <div className={clsx(["text-gray-600 dark:text-gray-300", "mb-4"])}>
          Full-stack Developer
        </div>
        <div className="flex gap-3 text-2xl h-16 items-center">
          <Link
            href={"https://www.facebook.com/tien.dnm/"}
            target="_blank"
            className={clsx([
              "w-10 h-10",
              "bg-white text-[#0062E0]",
              "flex justify-center items-center",
              "rounded-md",
              "hover:bg-[#0062E0] hover:text-white",
              "hover:w-11 hover:h-11 hover:text-3xl",
              "cursor-pointer",
              "transition-all duration-300",
            ])}
          >
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link
            href={"https://www.instagram.com/tien.dnm/"}
            target="_blank"
            className={clsx([
              "w-10 h-10",
              "instagram text-white",
              "flex justify-center items-center",
              "rounded-md",
              "hover:text-[#cc2366]",
              "hover:w-11 hover:h-11 hover:text-3xl",
              "cursor-pointer",
              "transition-all duration-300",
            ])}
          >
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link
            href={"https://twitter.com/tien_dnm"}
            target="_blank"
            className={clsx([
              "w-10 h-10",
              "bg-white text-[#1C9AEF]",
              "flex justify-center items-center",
              "rounded-md",
              "hover:bg-[#1C9AEF] hover:text-white",
              "hover:w-11 hover:h-11 hover:text-3xl",
              "cursor-pointer",
              "transition-all duration-300",
            ])}
          >
            <i className="fa-brands fa-twitter  "></i>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/tiendnm/"}
            target="_blank"
            className={clsx([
              "w-10 h-10",
              "bg-white text-[#0A66C2]",
              "flex justify-center items-center",
              "rounded-md",
              "hover:bg-[#0A66C2] hover:text-white",
              "hover:w-11 hover:h-11 hover:text-3xl",
              "cursor-pointer",
              "transition-all duration-300",
            ])}
          >
            <i className="fa-brands fa-linkedin  "></i>
          </Link>
        </div>
        <div
          className={clsx([
            "cursor-pointer",
            "flex gap-2 items-center",
            "bg-gradient-to-r from-[#33b1ff] to-[#bc4aff]",
            "hover:bg-gradient-to-l from-[#bc4aff] to-[#33b1ff]",
            "transition duration-300 ease-linear",
            "px-8 py-3 text-lg text-white rounded-[35px] mt-6",
          ])}
        >
          <i className="fa-solid fa-download"></i>
          Download CV
        </div>
      </div>
    </>
  );
}
