import { mdiTrayArrowDown } from "@mdi/js";
import Icon from "@mdi/react";
import clsx from "clsx";

const DownLoadCVButton = () => {
  return (
    <div
      className={clsx([
        "cursor-pointer",
        "flex items-center gap-2",
        "bg-gradient-to-r from-[#33b1ff] to-[#bc4aff]",
        "from-[#bc4aff] to-[#33b1ff] hover:bg-gradient-to-l",
        "transition duration-300 ease-linear",
        "mt-6 rounded-[35px] px-8 py-3 text-lg text-white",
      ])}
    >
      <Icon path={mdiTrayArrowDown} size={1}></Icon>
      Download CV
    </div>
  );
};
export default DownLoadCVButton;
