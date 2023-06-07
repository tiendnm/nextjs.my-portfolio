"use client";
import { navigationMenu } from "@variables";
import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import styles from "./main.module.css";
import CustomLink from "@components/CustomLink";

export default function FooterNav() {
  const segment = useSelectedLayoutSegment();
  return (
    <>
      <footer
        className={clsx([
          styles.footer,
          "bg-white/40 dark:bg-black/40 dark:text-white",
          "transition-colors duration-500",
          "w-full py-2",
        ])}>
        <nav className={styles["footer-nav"]}>
          {navigationMenu.map((tab, index) => {
            const isSelected =
              segment === tab.value ||
              (!segment && tab.value == navigationMenu[0].value);
            return (
              <CustomLink
                className={clsx([
                  "flex flex-nowrap items-center gap-2 rounded-3xl bg-[100%] p-2",
                  {
                    [styles.selected]: isSelected,
                  },
                ])}
                key={index}
                href={`/${tab.value}`}>
                {tab.icon}
                {/* {isSelected && tab.text} */}
              </CustomLink>
            );
          })}
        </nav>
      </footer>
    </>
  );
}
