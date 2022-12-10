import clsx from "clsx";

const Name = () => {
  return (
    <>
      <div
        className={clsx([
          "text-gray-700 dark:text-white",
          "font-medium",
          "mt-6 mb-1 text-3xl",
        ])}
        data-aos="fade-left"
        data-aos-duration="200">
        Đỗ Ngọc Minh Tiến
      </div>
      <div
        className={clsx(["text-gray-600 dark:text-gray-300", "mb-4"])}
        data-aos="fade-left"
        data-aos-duration="300">
        Software Engineer
      </div>
    </>
  );
};
export default Name;
