import clsx from "clsx";

const Name = () => {
  return (
    <>
      <div
        className={clsx([
          "text-black dark:text-white",
          "font-medium",
          "mt-6 mb-1 text-3xl",
        ])}
      >
        Đỗ Ngọc Minh Tiến
      </div>
      <div className={clsx(["text-gray-600 dark:text-gray-300", "mb-4"])}>
        Full-stack Engineer
      </div>
    </>
  );
};
export default Name;
