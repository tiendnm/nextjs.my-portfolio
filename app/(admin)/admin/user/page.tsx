"use client";
import Topbar from "@components/admin/Topbar";
import { useSession } from "@services/auth";

const User = () => {
  // const { data, status } = useSession({
  //   required: true,
  // });
  // if (status === "loading") {
  //   return <div className="text-red-500">Loading....</div>;
  // }
  return (
    <>
      <Topbar canGoBack>QUẢN LÝ NGƯỜI DÙNG</Topbar>
    </>
  );
};
export default User;
