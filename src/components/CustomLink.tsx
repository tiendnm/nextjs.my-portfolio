"use client";
import useProgressBar from "@hooks/useProgressBar";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

type CustomLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
> &
  LinkProps & {
    children?: React.ReactNode;
  } & React.RefAttributes<HTMLAnchorElement>;

export default function CustomLink({
  href = "",
  onClick,
  target,
  children,
  className,
  ...props
}: CustomLinkProps) {
  const router = useRouter();
  const pathName = usePathname();
  const progress = useProgressBar();

  const overrideNavigate = useCallback(() => {
    if (pathName !== href && target !== "_blank") {
      progress.start();
    }
    if (!target || target === "_self") {
      router.push(href as string);
    } else {
      window.open(href as string, target);
    }
  }, [href, pathName, progress, router, target]);

  return (
    <Link
      {...props}
      target={target}
      className={className}
      href={href}
      onClick={(e) => {
        if (onClick) {
          progress.start();
          onClick(e);
        } else {
          e.preventDefault();
          overrideNavigate();
        }
      }}>
      {children}
    </Link>
  );
}
