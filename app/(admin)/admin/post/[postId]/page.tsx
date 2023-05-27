import Topbar from "@components/admin/Topbar";
import { getPostByID } from "../getPost";
import Icon from "@mdi/react";
import { mdiTrashCan, mdiPencil } from "@mdi/js";
import CustomLink from "@components/CustomLink";
export default async function Page({ params }: { params: { postId: string } }) {
  const { postId } = params;
  const data: any = await getPostByID(postId);

  return (
    <>
      <Topbar
        back
        home>
        XEM BÀI VIẾT
      </Topbar>
      <div className="  px-3 pt-20 pb-8 ">
        <div>{data.title}</div>
        <div>{data.sub_title}</div>
        <div>{data.content}</div>
        <div>{data.author}</div>
        <div>{data.publish_date}</div>
      </div>
      <div className="fixed bottom-5 right-5 flex gap-2">
        <button className=" flex h-12 w-12 items-center justify-center rounded-full border border-teal-700 text-teal-700">
          <Icon
            path={mdiTrashCan}
            size={1}
          />
        </button>
        <CustomLink
          href={`/admin/post/update/${postId}`}
          className="flex h-12 w-12  items-center justify-center rounded-full  bg-teal-700 text-white">
          <Icon
            path={mdiPencil}
            size={1}
          />
        </CustomLink>
      </div>
    </>
  );
}
