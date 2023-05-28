import { api_base_url } from "@utils/url";
import { Post } from "../_model/post.model";
import "server-only";
interface filterParams {
  page: number;
  size: number;
  search: string;
}

export async function getPost(): Promise<Post[]> {
  const data = await fetch(`${api_base_url}/v1/post`, {
    cache: "no-cache",
  });
  return data.json();
}

export async function filterPost({
  page,
  size,
  search,
}: filterParams): Promise<Post[] | undefined> {
  try {
    const myUrlWithParams = new URL(`${api_base_url}/v1/post/filter`);
    myUrlWithParams.searchParams.append("page", `${page}`);
    myUrlWithParams.searchParams.append("size", `${size}`);
    myUrlWithParams.searchParams.append("search", `${search}`);
    myUrlWithParams.searchParams.append("sort", `-publish_date,-created_date`);
    const data = await fetch(myUrlWithParams, {
      cache: "no-cache",
    });
    if (data.status === 200) {
      return data.json();
    }
    return undefined;
  } catch {
    return undefined;
  }
}

export async function getPostByID(id: string): Promise<Post | undefined> {
  try {
    const data = await fetch(`${api_base_url}/v1/post/${id}`, {
      cache: "no-cache",
    });
    if (data.status === 200) {
      return data.json();
    }
    return undefined;
  } catch {
    return undefined;
  }
}

export async function getPostsCount(): Promise<{ count: number | undefined }> {
  const data = await fetch(`${api_base_url}/v1/post/count`, {
    cache: "no-cache",
  });
  if (data.status === 200) {
    return data.json();
  }
  return { count: undefined };
}
export async function getFilteredPostsCount(
  search: string
): Promise<{ count: number | undefined }> {
  const data = await fetch(`${api_base_url}/v1/post/filter/count?search=${search}`, {
    cache: "no-cache",
  });
  if (data.status === 200) {
    return data.json();
  }
  return { count: undefined };
}
export const preload = (id: string) => {
  void getPostByID(id);
};
