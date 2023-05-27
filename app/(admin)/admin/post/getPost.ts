import { api_base_url } from "@utils/url";
import { Post } from "./postModel";

export async function getPost(): Promise<Post[]> {
  const data = await fetch(`${api_base_url}/v1/post`);
  return data.json();
}
export async function filterPost(page: number, size: number): Promise<Post[]> {
  const data = await fetch(`${api_base_url}/v1/post/filter?page=${page}&size=${size}`);
  return data.json();
}

export async function getPostByID(id: string): Promise<Post> {
  const data = await fetch(`${api_base_url}/v1/post/${id}`);
  return data.json();
}
export async function getPostsCount(): Promise<{ count: number }> {
  const data = await fetch(`${api_base_url}/v1/post/count`);
  const rs = await data.json();
  return rs;
}
