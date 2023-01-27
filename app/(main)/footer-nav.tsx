"use client";
import {
  mdiAccountOutline,
  mdiCardAccountDetailsOutline,
  mdiFileAccountOutline,
  mdiHomeOutline,
  mdiPostOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment, useRouter, usePathname } from "next/navigation";
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
export default function FooterNav() {
  const router = useRouter();
  const segment = useSelectedLayoutSegment();
  const pathname = usePathname();

  return (
    <>
      <footer
        className={clsx([
          styles.footer,
          "bg-white/40 dark:bg-black/40 dark:text-white",
          "transition-colors duration-500",
          "py-2",
        ])}>
        <nav className={styles["footer-nav"]}>
          {headerTabs.map((tab, index) => {
            const isSelected =
              segment === tab.value || (!segment && tab.value == headerTabs[0].value);
            return (
              <Link
                className={clsx([
                  "flex flex-nowrap items-center gap-2 rounded-3xl bg-[100%] p-2",
                  {
                    [styles.selected]: isSelected,
                  },
                ])}
                key={index}
                href={tab.value}>
                {tab.icon} {isSelected && tab.text}
              </Link>
            );
          })}
        </nav>
      </footer>
    </>
  );
}
