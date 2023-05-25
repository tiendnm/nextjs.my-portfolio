import Topbar from "@components/admin/Topbar";
import { getPostByID } from "../../getPost";
import { mdiContentSave, mdiTrashCan } from "@mdi/js";
import Icon from "@mdi/react";
import PostForm from "../../postForm";

export default async function Page({ params }: { params: { postId: string } }) {
  const { postId } = params;
  const data: any = await getPostByID(postId);
  return (
    <>
      <Topbar canGoBack>CHỈNH SỬA BÀI VIẾT</Topbar>
      <div className="  px-3 pt-20 pb-8 ">
        <PostForm
          title={data.title}
          _id={data._id}
          author={data.author}
          content={data.content}
          publish_date={data.publish_date}
          sub_title={data.sub_title}
        />
      </div>
      <div className="fixed bottom-5 right-5 flex gap-2">
        <button className=" flex h-12 w-12 items-center justify-center rounded-full border border-teal-700 text-teal-700">
          <Icon
            path={mdiTrashCan}
            size={1}
          />
        </button>
        <button className=" flex h-12 w-12 items-center justify-center rounded-full border bg-teal-700 text-white">
          <Icon
            path={mdiContentSave}
            size={1}
          />
        </button>
      </div>
    </>
  );
}
