import { serialize } from "next-mdx-remote/serialize";
import { getPostByID } from "../getPost";
import PostView from "./postView";

export default async function Page({ params }: { params: { postId: string } }) {
  const { postId } = params;
  const data = await getPostByID(postId);
  const mdxSource = await serialize(data.content as any);
  console.log(mdxSource);
  return (
    <PostView
      {...data}
      mdxSource={mdxSource}
    />
  );
}
