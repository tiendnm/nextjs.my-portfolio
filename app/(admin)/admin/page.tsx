"use client";
import { useSession } from "services/auth";

const Admin = () => {
  const { data, status } = useSession({
    required: true,
  });
  if (status === "loading") {
    return <div className="text-red-500">Loading....</div>;
  }
  return <>{status}</>;
};
export default Admin;
