"use client";
import CustomLink from "@components/CustomLink";
import clsx from "clsx";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";
import { useRouter } from "next/navigation";

interface TopbarProps extends React.HTMLAttributes<HTMLHeadingElement> {
  canGoBack?: boolean;
}
export default function Topbar({
  canGoBack = false,
  children,
  className,
  ...props
}: TopbarProps) {
  const router = useRouter();
  return (
    <>
      <div className="absolute flex w-full items-center justify-center bg-white p-2">
        <div
          {...props}
          className={clsx(["relative flex h-6 w-full", className])}>
          {canGoBack && (
            <CustomLink
              href={"#"}
              className="z-10"
              onClick={(e) => {
                e.preventDefault();
                router.back();
              }}>
              <Icon
                path={mdiArrowLeft}
                size={1}
              />
            </CustomLink>
          )}
          <h1 className="absolute top-0 left-0 w-full text-center">{children}</h1>
        </div>
      </div>
    </>
  );
}
