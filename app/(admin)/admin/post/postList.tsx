import CustomLink from "@components/CustomLink";
import { filterPost, getFilteredPostsCount, getPost, getPostsCount } from "./getPost";
import PostListClient from "./postListClient";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { Empty, Input } from "antd";
import Icon from "@mdi/react";
import { mdiDatabaseSearch, mdiMagnify, mdiSearchWeb } from "@mdi/js";

const PAGE_SIZE: number = 4;

export default async function PostList() {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page")!) || 1;
  const search = searchParams.get("search") || "";

  const data = await filterPost({ page, search, size: PAGE_SIZE });
  const { count } = await getFilteredPostsCount(search);

  return (
    <PostListClient
      search={search}
      items={data}
      count={count}
      pageLength={PAGE_SIZE}
      page={page}
    />
  );
}
