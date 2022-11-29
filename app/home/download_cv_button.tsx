import clsx from "clsx";

const DownLoadCVButton = () => {
  return (
    <div
      className={clsx([
        "cursor-pointer",
        "flex gap-2 items-center",
        "bg-gradient-to-r from-[#33b1ff] to-[#bc4aff]",
        "hover:bg-gradient-to-l from-[#bc4aff] to-[#33b1ff]",
        "transition duration-300 ease-linear",
        "px-8 py-3 text-lg text-white rounded-[35px] mt-6",
      ])}
    >
      <i className="fa-solid fa-download"></i>
      Download CV
    </div>
  );
};
export default DownLoadCVButton;
