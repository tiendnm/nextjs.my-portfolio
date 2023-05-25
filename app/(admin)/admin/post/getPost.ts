import { api_base_url } from "@utils/url";
import { Post } from "./postModel";

export async function getPost(): Promise<Post[]> {
  const data = await fetch(`${api_base_url}/v1/post`);
  return data.json();
}

export async function getPostByID(id: string): Promise<Post> {
  const data = await fetch(`${api_base_url}/v1/post/${id}`);
  return data.json();
}
