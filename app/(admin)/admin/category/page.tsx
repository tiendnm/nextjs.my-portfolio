"use client";
import Topbar from "@components/admin/Topbar";
import { useSession } from "@services/auth";

const Category = () => {
  // const { data, status } = useSession({
  //   required: true,
  // });
  // if (status === "loading") {
  //   return <div className="text-red-500">Loading....</div>;
  // }
  return (
    <>
      <Topbar canGoBack>QUẢN LÝ DANH MỤC</Topbar>
    </>
  );
};
export default Category;
