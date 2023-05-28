import PostList from "./_components/post.list";
import { filterPost, getFilteredPostsCount } from "./_fetch/post.fetch";

const PAGE_SIZE: number = 4;

export default async function Post({
  searchParams,
}: {
  searchParams: { page: string; search: string };
}) {
  const page = parseInt(searchParams.page) || 1;
  const search = searchParams.search || "";
  const data = await filterPost({ page, search, size: PAGE_SIZE });
  const { count } = await getFilteredPostsCount(search);
  return (
    <PostList
      search={search}
      items={data}
      count={count ?? 0}
      pageLength={PAGE_SIZE}
      page={page}
    />
  );
}
