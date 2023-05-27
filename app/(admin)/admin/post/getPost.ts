import { api_base_url } from "@utils/url";
import { Post } from "./postModel";

export async function getPost(): Promise<Post[]> {
  const data = await fetch(`${api_base_url}/v1/post`);
  return data.json();
}

interface filterParams {
  page: number;
  size: number;
  search: string;
}

export async function filterPost({
  page,
  size,
  search,
}: filterParams): Promise<Post[] | undefined> {
  try {
    const data = await fetch(
      `${api_base_url}/v1/post/filter?page=${page}&size=${size}&search=${search}&sort=-publish_date,-created_date`
    );
    return data.json();
  } catch {
    return undefined;
  }
}

export async function getPostByID(id: string): Promise<Post> {
  const data = await fetch(`${api_base_url}/v1/post/${id}`, {
    cache: "no-cache",
    next: { revalidate: 10 },
  });
  return data.json();
}

export async function getPostsCount(): Promise<{ count: number }> {
  const data = await fetch(`${api_base_url}/v1/post/count`);
  const rs = await data.json();
  return rs;
}
export async function getFilteredPostsCount(search: string): Promise<{ count: number }> {
  const data = await fetch(`${api_base_url}/v1/post/filter/count?search=${search}`);
  const rs = await data.json();
  return rs;
}
