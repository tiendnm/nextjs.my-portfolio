import { getPostByID, preload } from "../../_fetch/post.fetch";
import PostDelete from "../../_components/post.delete";
import PostNotfound from "../../_components/post.notfound";

export default async function Page({ params }: { params: { postId: string } }) {
  const { postId } = params;
  preload(postId);
  const data = await getPostByID(postId);
  if (!data) {
    return <PostNotfound />;
  }
  return <PostDelete id={postId} />;
}
