// import db from "../../../lib/db";
"use client";

import { useSession } from "next-auth/react";
const Admin = () => {
  const { data } = useSession();
  console.log(data);
  return (
    <div>
      <p>{data?.user?.name}</p>
      <p>{data?.user?.email}</p>
    </div>
  );
};

export default Admin;
