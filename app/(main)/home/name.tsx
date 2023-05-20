import { myInformation } from "@variables";
import clsx from "clsx";

const Name = () => {
  return (
    <>
      <div
        data-sal="fade"
        data-sal-delay="300"
        className={clsx([
          "text-gray-700 dark:text-white",
          "font-medium",
          "mt-6 mb-1 text-3xl",
        ])}>
        {myInformation.name}
      </div>
      <div
        data-sal="fade"
        data-sal-delay="400"
        className={clsx(["text-gray-600 dark:text-gray-300", "mb-4"])}>
        {myInformation.jobTitle}
      </div>
    </>
  );
};
export default Name;
