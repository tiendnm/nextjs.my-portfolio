// import db from "../../../lib/db";
"use client";
import { signIn } from "next-auth/react";
// import { useSession } from "next-auth/react";
const SignIn = () => {
  const login = () => {
    signIn("credentials", { username: "jsmith", password: "1234" });
  };
  return (
    <>
      <button onClick={login}>Sign in</button>
    </>
  );
};

export default SignIn;
