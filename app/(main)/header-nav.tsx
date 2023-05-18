"use client";
import { navigationMenu } from "@variables";
import { useDarkMode } from "@contexts/AppContext";
import { mdiMoonWaningCrescent, mdiWhiteBalanceSunny } from "@mdi/js";
import Icon from "@mdi/react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSelectedLayoutSegment } from "next/navigation";
import styles from "./main.module.css";
import useProgressBar from "@hooks/useProgressBar";
import CustomLink from "@components/CustomLink";

export default function HeaderNav() {
  const router = useRouter();
  const theme = useDarkMode();
  const segment = useSelectedLayoutSegment();
  const progress = useProgressBar();
  const handleNavigate = (href: string) => {
    progress.start();
    router.push(href);
  };
  return (
    <>
      <header className="pointer-events-none absolute top-0 left-0 z-40 flex w-full items-center  justify-between lg:static">
        <div
          className={clsx([
            "flex w-full justify-between  px-2  lg:bg-transparent lg:px-0 lg:dark:bg-transparent",
          ])}>
          <div className="my-2 flex w-full items-center justify-between space-x-4 lg:my-8 ">
            <Link href={"/"}>
              <Image
                width={300}
                height={300}
                src={"/tien-logo-long.png"}
                alt="logo"
                className="pointer-events-auto w-20"
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
                  "pointer-events-auto cursor-pointer",
                ])}>
                {theme.darkMode ? (
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
            </div>
          </div>
        </div>
        <nav>
          <ul className={clsx(["my-12 hidden gap-5 lg:flex"])}>
            {navigationMenu.map((tab, index) => {
              const isSelected =
                segment === tab.value ||
                (!segment && tab.value == navigationMenu[0].value);
              return (
                <li key={index}>
                  <CustomLink
                    href={`/${tab.value}`}
                    className={clsx([
                      "pointer-events-auto",
                      "text-gray-600 dark:text-white",
                      "bg-white dark:bg-gray-600",
                      styles["nav-button-light"],
                      {
                        [styles.selected]: isSelected,
                      },
                    ])}>
                    <span className="mr-2">{tab.icon}</span> {tab.text}
                  </CustomLink>
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
                "pointer-events-auto cursor-pointer",
              ])}>
              {theme.darkMode ? (
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
