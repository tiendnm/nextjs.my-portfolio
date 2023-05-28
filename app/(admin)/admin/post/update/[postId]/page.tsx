import { getPostByID, preload } from "../../_fetch/post.fetch";
import PostForm from "../../_components/post.form";
import PostNotfound from "../../_components/post.notfound";
export const revalidate = 5;

export default async function Page({ params }: { params: { postId: string } }) {
  const { postId } = params;
  preload(postId);
  const data = await getPostByID(postId);
  if (!data) {
    return <PostNotfound />;
  }
  return (
    <PostForm
      key={data._id}
      {...data}
    />
  );
}
