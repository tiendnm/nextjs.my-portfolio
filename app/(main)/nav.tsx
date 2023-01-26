"use client";
import {
  mdiAccountOutline,
  mdiCardAccountDetailsOutline,
  mdiClose,
  mdiFileAccountOutline,
  mdiHomeOutline,
  mdiMenu,
  mdiMoonWaningCrescent,
  mdiPostOutline,
  mdiWhiteBalanceSunny,
} from "@mdi/js";
import Icon from "@mdi/react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import {
  useSelectedLayoutSegment,
  useRouter,
  usePathname,
} from "next/navigation";
import { useEffect, useState } from "react";
import { useDarkMode } from "@hooks/useDarkMode";
import styles from "./main.module.css";
const headerTabs = [
  {
    text: "Home",
    value: "home",
    icon: (
      <Icon
        path={mdiHomeOutline}
        size={1}
      />
    ),
  },
  {
    text: "About",
    value: "about",
    icon: (
      <Icon
        path={mdiAccountOutline}
        size={1}
      />
    ),
  },
  {
    text: "Resume",
    value: "resume",
    icon: (
      <Icon
        path={mdiFileAccountOutline}
        size={1}
      />
    ),
  },
  {
    text: "Blogs",
    value: "blogs",
    icon: (
      <Icon
        path={mdiPostOutline}
        size={1}
      />
    ),
  },
  {
    text: "Contact",
    value: "contact",
    icon: (
      <Icon
        path={mdiCardAccountDetailsOutline}
        size={1}
      />
    ),
  },
];
export default function Nav() {
  const router = useRouter();
  const theme = useDarkMode();
  const segment = useSelectedLayoutSegment();
  const pathname = usePathname();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const handleNavigate = (href: string) => {
    if (pathname === href) setIsNavExpanded(false);
    else router.push(href);
  };
  useEffect(() => {
    if (isNavExpanded) {
      setIsNavExpanded(!isNavExpanded);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [segment]);
  return (
    <>
      <header className="fixed top-0 left-0 z-40 flex w-full items-center justify-between  lg:static ">
        <div
          className={clsx([
            "flex w-full justify-between  px-2  lg:bg-transparent lg:px-0 lg:dark:bg-transparent",
            {
              "bg-stone-100/50 dark:bg-black/50": !isNavExpanded,
              "bg-white dark:bg-gray-900": isNavExpanded,
            },
          ])}>
          <div className="my-2 flex w-full items-center justify-between space-x-4 lg:my-8 ">
            <Link href={"/"}>
              <Image
                width={300}
                height={300}
                src={"/tien-logo-long.png"}
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
                  "ml-2 h-[40px] w-[40px]",
                  "rounded-full",
                  "flex items-center justify-center lg:hidden",
                  "bg-white text-gray-600",
                  "hover:bg-[#33b1ff] hover:text-white",
                  "dark:bg-gray-600 dark:text-white",
                  "dark:hover:bg-[#33b1ff] dark:hover:text-white",
                  "transition-all duration-300 ease-in-out",
                  "cursor-pointer",
                ])}>
                {theme.isDarkMode ? (
                  <Icon
                    path={mdiWhiteBalanceSunny}
                    size={1}
                  />
                ) : (
                  <Icon
                    path={mdiMoonWaningCrescent}
                    size={1}
                    rotate={-25}
                  />
                )}
              </span>
              <span
                className={clsx([
                  "visible opacity-100 lg:invisible lg:opacity-0",
                  "h-[40px] w-[40px]",
                  "rounded-full",
                  "hover:bg-[#33b1ff] dark:hover:bg-[#33b1ff]",
                  "flex items-center justify-center",
                  "text-gray-600 dark:text-white",
                  "ml-3 cursor-pointer",
                  {
                    "bg-white dark:bg-gray-600": !isNavExpanded,
                    "bg-[#ff6b60] dark:bg-[#ff6b60] ": isNavExpanded,
                  },
                ])}
                onClick={() => {
                  setIsNavExpanded((prev) => !prev);
                }}>
                {isNavExpanded ? (
                  <Icon
                    path={mdiClose}
                    size={1}
                  />
                ) : (
                  <Icon
                    path={mdiMenu}
                    size={1}
                  />
                )}
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
          ])}>
          <ul
            className={clsx([
              {
                "my-12 flex gap-5": !isNavExpanded,
                "absolute left-0 top-14 z-50 block w-full rounded-b-[20px] bg-white py-4 drop-shadow-lg dark:bg-gray-900 lg:hidden":
                  isNavExpanded,
              },
            ])}>
            {headerTabs.map((tab, index) => {
              const isSelected =
                segment === tab.value ||
                (!segment && tab.value == headerTabs[0].value);
              return (
                <li key={index}>
                  <a
                    onClick={() => {
                      handleNavigate(`/${tab.value}`);
                    }}
                    className={clsx([
                      "text-gray-600 dark:text-white",
                      "bg-white dark:bg-gray-600",
                      styles["nav-button"],
                      {
                        [styles.expanded]: isNavExpanded,
                        [styles.selected]: isSelected,
                      },
                    ])}>
                    <span className="mr-2">{tab.icon}</span> {tab.text}
                  </a>
                </li>
              );
            })}
            <span
              onClick={() => {
                theme.ToggleDarkMode();
              }}
              className={clsx([
                "ml-2 h-[40px] w-[40px]",
                "rounded-full",
                "hidden items-center justify-center lg:flex",
                "bg-white text-gray-600",
                "hover:bg-[#33b1ff] hover:text-white",
                "dark:bg-gray-600 dark:text-white",
                "dark:hover:bg-[#33b1ff] dark:hover:text-white",
                "transition-all duration-300 ease-in-out",
                "cursor-pointer",
              ])}>
              {theme.isDarkMode ? (
                <Icon
                  path={mdiWhiteBalanceSunny}
                  size={1}
                />
              ) : (
                <Icon
                  path={mdiMoonWaningCrescent}
                  size={1}
                  rotate={-25}
                />
              )}
            </span>
          </ul>
        </nav>
      </header>
    </>
  );
}
