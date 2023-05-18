"use client";
import useProgressBar from "@hooks/useProgressBar";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

type CustomLinkProps = LinkProps & {
  children?: React.ReactNode;
  className?: string;
};

export default function CustomLink({
  href,
  children,
  className,
  ...props
}: CustomLinkProps) {
  const router = useRouter();
  const pathName = usePathname();
  const progress = useProgressBar();

  const overrideNavigate = useCallback(() => {
    if (pathName !== href) {
      progress.start();
    }
    router.push(href as string);
  }, [href, pathName, progress, router]);

  return (
    <Link
      {...props}
      className={className}
      href={""}
      onClick={(e) => {
        e.preventDefault();
        overrideNavigate();
      }}>
      {children}
    </Link>
  );
}
