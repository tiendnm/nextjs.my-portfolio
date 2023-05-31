import { getPostByID, preload } from "../../_fetch/post.fetch";
import PostNotfound from "../../_components/post.notfound";
import PostView from "../../_components/post.view";

export default async function Page({ params }: { params: { postId: string } }) {
  const { postId } = params;
  preload(postId);
  const data = await getPostByID(postId);
  if (!data) {
    return <PostNotfound />;
  }
  return <PostView {...data} />;
}
