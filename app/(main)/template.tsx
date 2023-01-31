"use client";
import { PropsWithChildren, useEffect } from "react";
import sal from "sal.js";
const Template = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    sal();
  });
  return children;
};
export default Template;
