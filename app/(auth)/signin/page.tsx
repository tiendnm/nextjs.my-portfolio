"use client";
import Input from "@components/Input";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "@services/auth";
import { useRouter } from "next/navigation";

const loginFields = [
  {
    labelText: "Username",
    labelFor: "username",
    id: "username",
    name: "username",
    type: "text",
    autoComplete: "off",
    isRequired: true,
    placeholder: "Username",
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "new-password",
    isRequired: true,
    placeholder: "Password",
  },
];
const fields = loginFields;
let fieldsState: any = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const SignIn = () => {
  const { status, signIn, signOut } = useSession();
  const [loginState, setLoginState] = useState(fieldsState);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (status === "authorized") {
      router.push("/admin");
    }
  }, [router, status]);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    authenticateUser();
  };
  const authenticateUser = () => {
    signIn({
      ...loginState,
      remember: false,
    });
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginState({
      ...loginState,
      [event.target.id]: event.target.value,
    });
  };
  return (
    <>
      <div className="flex h-screen min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="mb-10">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Login to your account
            </h2>
            <p className=" mt-5 text-center text-sm text-gray-600">
              {"Don't have an account yet? "}
              <Link
                href="#"
                className={`font-medium text-black hover:text-black`}>
                Sign up
              </Link>
            </p>
          </div>
          <div className="text-danger">{errorMessage}</div>
          <form
            className="mt-8 space-y-6"
            onSubmit={handleSubmit}>
            <div className="-space-y-px">
              {fields.map((field) => (
                <Input
                  key={field.id}
                  handleChange={handleChange}
                  value={loginState[field.id]}
                  labelText={field.labelText}
                  labelFor={field.labelFor}
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  isRequired={field.isRequired}
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  customClass={undefined}
                />
              ))}
            </div>
            <div className="flex items-center justify-between ">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className={`h-4 w-4 rounded border-gray-300 text-black focus:ring-black`}
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  href={"#"}
                  className={`font-medium text-black hover:text-black`}>
                  Forgot your password?
                </Link>
              </div>
            </div>
            <button
              type="submit"
              className={`group relative mt-10 flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2`}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
