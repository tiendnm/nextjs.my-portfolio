import { mdiTrayArrowDown } from "@mdi/js";
import Icon from "@mdi/react";
import clsx from "clsx";

const DownLoadCVButton = () => {
  return (
    <div
      className={clsx([
        "cursor-pointer",
        "flex items-center gap-2",
        "btn-gradient-transform",
        "mt-6 rounded-[35px] px-8 py-3 text-lg text-white",
      ])}
    >
      <Icon path={mdiTrayArrowDown} size={1}></Icon>
      Download CV
    </div>
  );
};
export default DownLoadCVButton;
