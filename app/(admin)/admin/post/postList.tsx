import CustomLink from "@components/CustomLink";
import { filterPost, getPost, getPostsCount } from "./getPost";
import PostListClient from "./postListClient";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { Empty } from "antd";

const PAGE_SIZE: number = 5;

export default async function PostList() {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page")!) || 1;
  const data = await filterPost(page, PAGE_SIZE);
  const { count } = await getPostsCount();

  return (
    <>
      {!data || data.length === 0 ? (
        <Empty description="Không tìm thấy dữ liệu" />
      ) : (
        <PostListClient
          items={data}
          count={count}
          pageLength={PAGE_SIZE}
          page={page}
        />
      )}
    </>
  );
}
