import { mdiTrayArrowDown } from "@mdi/js";
import Icon from "@mdi/react";
import styles from "./home.module.css";
const DownLoadCVButton = () => {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="500">
      <div className={styles["btn-download-cv"]}>
        <Icon
          path={mdiTrayArrowDown}
          size={1}></Icon>
        Download CV
      </div>
    </div>
  );
};
export default DownLoadCVButton;
