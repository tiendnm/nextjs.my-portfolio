import CustomLink from "@components/CustomLink";
import { getPost } from "./getPost";

export default async function ListPost() {
  const data: any[] = await getPost();
  return (
    <>
      {!data || data.length === 0 ? (
        <>Chưa có dữ liệu nào</>
      ) : (
        <div className="flex flex-col gap-5">
          {data?.map((item) => {
            return (
              <CustomLink
                key={item._id}
                href={`admin/post/${item._id}`}>
                <div className="rounded bg-white p-3">
                  <div className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                    {item.title}
                  </div>
                  <div className="text-sm text-gray-500"> {item.sub_title}</div>
                </div>
              </CustomLink>
            );
          })}
        </div>
      )}
    </>
  );
}
