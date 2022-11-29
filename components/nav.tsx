"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";
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
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <>
      <header className="flex justify-between items-center fixed top-0 left-0 w-full lg:static z-40 ">
        <div className="flex justify-between w-full px-4 lg:px-0  lg:bg-transparent lg:dark:bg-transparent bg-white/50 dark:bg-black/50">
          <div className="flex justify-between w-full items-center space-x-4 lg:my-8 my-5 ">
            <Link href={"/"}>
              <Image
                width={300}
                height={300}
                src={"/tien-no-bg.png"}
                alt="logo"
                className="w-20"
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
                  "dark:bg-gray-600 dark:text-white",
                  "dark:hover:bg-[#33b1ff] dark:hover:text-white",
                  "transition-all duration-300 ease-in-out",
                  "cursor-pointer",
                ])}
              >
                <i
                  className={clsx([
                    {
                      "fa-regular fa-moon": !theme.isDarkMode,
                      "fa-solid fa-sun": theme.isDarkMode,
                    },
                  ])}
                />
              </span>
              <span
                className={clsx([
                  "opacity-100 visible lg:opacity-0 lg:invisible",
                  "w-[40px] h-[40px]",
                  "rounded-full",
                  "hover:bg-[#33b1ff] dark:hover:bg-[#33b1ff]",
                  "flex justify-center items-center",
                  "text-black dark:text-white",
                  "cursor-pointer ml-3",
                  {
                    "dark:bg-gray-600 bg-white": !isNavExpanded,
                    "dark:bg-[#ff6b60] bg-[#ff6b60] ": isNavExpanded,
                  },
                ])}
                onClick={() => {
                  setIsNavExpanded((prev) => !prev);
                }}
              >
                <i
                  className={clsx([
                    "fa-solid",
                    {
                      "fa-bars": !isNavExpanded,
                      "fa-xmark": isNavExpanded,
                    },
                  ])}
                ></i>
              </span>
            </div>
          </div>
        </div>
        <nav
          className={clsx([
            {
              "hidden lg:block": !isNavExpanded,
              "block dark:bg-black ": isNavExpanded,
            },
          ])}
        >
          <ul
            className={clsx([
              {
                "flex my-12 gap-5": !isNavExpanded,
                "block lg:hidden absolute left-0 rounded-b-[20px] top-20 z-50 w-full bg-white dark:bg-[#1D1D1D] drop-shadow-lg py-4":
                  isNavExpanded,
              },
            ])}
          >
            {headerTabs.map((tab, index) => {
              const isSelected =
                segment === tab.value ||
                (!segment && tab.value == headerTabs[0].value);
              return (
                <li key={index}>
                  <Link
                    href={`/${tab.value}`}
                    className={
                      !isNavExpanded
                        ? clsx([
                            "rounded-md",
                            "cursor-pointer",
                            "bg-white",
                            "from-[#33b1ff] to-[#bc4aff]",
                            "hover:bg-gradient-to-r",
                            "dark:bg-gray-600",
                            "text-gray-lite",
                            "font-medium",
                            "flex",
                            "py-2.5 md:px-4 xl:px-5",
                            "items-center",
                            "transition-all duration-300 ease-in-out",
                            "dark:text-white hover:text-white",
                            {
                              "text-black": !isSelected,
                              "bg-gradient-to-r": isSelected,
                              "text-white": isSelected,
                            },
                          ])
                        : clsx([
                            "font-medium",
                            "mx-2.5",
                            "flex",
                            "items-center",
                            "pl-4",
                            "py-2.5 md:px-4 xl:px-5",
                            "transition-all duration-300 ease-in-out",
                            " hover:text-white",
                            "dark:hover:text-[#33b1ff]",
                            "hover:text-[#33b1ff]",
                            {
                              "dark:text-white": !isSelected,
                              "text-[#33b1ff]": isSelected,
                              "dark:text-[#33b1ff]": isSelected,
                            },
                          ])
                    }
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
                  {
                    "fa-regular fa-moon": !theme.isDarkMode,
                    "fa-solid fa-sun": theme.isDarkMode,
                  },
                ])}
              />
            </span>
          </ul>
        </nav>
      </header>
    </>
  );
}
