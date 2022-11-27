"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useDarkMode } from "../services/hooks/useDarkMode";
const headerTabs = [
  {
    text: "Home",
    value: "home",
    icon: <i className="fa-solid fa-home" />,
  },
  {
    text: "About",
    value: "about",
    icon: <i className="fa-solid fa-user" />,
  },
  {
    text: "Resume",
    value: "resume",
    icon: <i className="fa-solid fa-file-lines" />,
  },
  {
    text: "Blogs",
    value: "blogs",
    icon: <i className="fa-brands fa-blogger" />,
  },
  {
    text: "Contact",
    value: "contact",
    icon: <i className="fa-regular fa-address-card" />,
  },
];
export default function Nav() {
  const theme = useDarkMode();
  const segment = useSelectedLayoutSegment();
  return (
    <header className="flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111] ">
      <div className=" flex justify-between w-full px-4 lg:px-0 bg-[#F3F6F6] lg:bg-transparent lg:dark:bg-transparent dark:bg-black ">
        <div className="flex justify-between w-full items-center space-x-4 lg:my-8 my-5 ">
          <Link href={"/"}>
            <Image
              width={300}
              height={300}
              src={"/tien-fit.png"}
              alt="logo"
              className="w-14"
            />
          </Link>
          <div className="flex items-center">
            <span
              onClick={() => {
                theme.ToggleDarkMode();
              }}
              className={clsx([
                "w-[40px] h-[40px] ml-2",
                "rounded-full",
                "flex lg:hidden justify-center items-center",
                "bg-white text-black",
                "hover:bg-[#33b1ff] hover:text-white",
                "dark:bg-gray-800 dark:text-white",
                "dark:hover:bg-[#33b1ff] dark:hover:text-white",
                "transition-all duration-300 ease-in-out",
                "cursor-pointer",
              ])}
            >
              <i
                className={clsx([
                  "fa-regular",
                  {
                    "fa-moon": !theme.isDarkMode,
                    "fa-sun": theme.isDarkMode,
                  },
                ])}
              />
            </span>
            <span className="lg:opacity-0 lg:invisible visible opacity-100 bg-[#33b1ff] w-[40px] h-[40px] rounded-full flex justify-center cursor-pointer items-center text-white dark:text-white text-3xl ml-3 "></span>
          </div>
        </div>
      </div>
      <nav className="hidden lg:block">
        <ul className="flex my-12 gap-5">
          {headerTabs.map((tab, index) => {
            const isSelected =
              segment === tab.value ||
              (!segment && tab.value == headerTabs[0].value);
            return (
              <li key={index}>
                <Link
                  href={`/${tab.value}`}
                  className={clsx([
                    "rounded-md",
                    "cursor-pointer",
                    "font-poppins",
                    "bg-white",
                    "from-[#33b1ff] to-[#bc4aff]",
                    "hover:bg-gradient-to-r",
                    "dark:bg-gray-600",
                    "text-gray-lite",
                    "font-medium",
                    "",
                    "flex",
                    "text-xtiny",
                    "py-2.5 md:px-4 xl:px-5",
                    "items-center",
                    "transition-all duration-300 ease-in-out",
                    {
                      "bg-gradient-to-r": isSelected,
                      "text-white": isSelected,
                    },
                    "text-black dark:text-white hover:text-white",
                  ])}
                >
                  <span className="mr-2">{tab.icon}</span> {tab.text}
                </Link>
              </li>
            );
          })}
          <span
            onClick={() => {
              theme.ToggleDarkMode();
            }}
            className={clsx([
              "w-[40px] h-[40px] ml-2",
              "rounded-full",
              "hidden lg:flex justify-center items-center",
              "bg-white text-black",
              "hover:bg-[#33b1ff] hover:text-white",
              "dark:bg-gray-600 dark:text-white",
              "dark:hover:bg-[#33b1ff] dark:hover:text-white",
              "transition-all duration-300 ease-in-out",
              "cursor-pointer",
            ])}
          >
            <i
              className={clsx([
                "fa-regular",
                {
                  "fa-moon": !theme.isDarkMode,
                  "fa-sun": theme.isDarkMode,
                },
              ])}
            />
          </span>
        </ul>
      </nav>
    </header>
  );
}
