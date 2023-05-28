"use client";
import CustomLink from "@components/CustomLink";
import { useAdminContext } from "@contexts/AdminContext";
import { useSession } from "@services/auth";
import { BLUR_URL } from "@variables";
import Image from "next/image";

const navigationItems = [
  {
    to: "admin/user",
    title: "Quản lý người dùng",
  },
  {
    to: "admin/role",
    title: "Quản lý phân quyền",
  },
  {
    to: "admin/category",
    title: "Quản lý danh mục",
  },
  {
    to: "admin/post",
    title: "Quản lý bài viết",
  },
];

export default function AdminPage() {
  useAdminContext({
    canGoBack: false,
    canGoHome: false,
    pageTitle: "TRANG QUẢN TRỊ",
  });
  const { status } = useSession({
    required: true,
  });
  if (status === "loading") {
    return <div className="text-green-500">Authorizing....</div>;
  }
  return (
    <>
      <div className="relative h-52 w-52">
        <Image
          fill
          src={"/undraw_cms.svg"}
          placeholder="blur"
          blurDataURL={BLUR_URL}
          alt="avatar"
          className=""
          sizes="(max-width: 786px) 256px, 700px"
          loading="lazy"
        />
      </div>
      <div className="grid w-full grid-cols-2 gap-5">
        {navigationItems.map((item) => {
          return (
            <CustomLink
              href={item.to}
              key={item.to}
              className="flex items-center justify-center rounded-lg bg-white py-10">
              {item.title}
            </CustomLink>
          );
        })}
      </div>
    </>
  );
}
