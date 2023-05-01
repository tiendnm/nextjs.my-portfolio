import { mdiOpenInNew } from "@mdi/js";
import Icon from "@mdi/react";
import styles from "./home.module.css";
import Link from "next/link";
const DownLoadCVButton = () => {
  return (
    <div
      data-sal="fade"
      data-sal-delay="300">
      <Link
        className={styles["btn-download-cv"]}
        href={"https://resume.tien-dnm.com"}
        target="_blank">
        <Icon
          path={mdiOpenInNew}
          size={1}></Icon>
        Xem CV
      </Link>
    </div>
  );
};
export default DownLoadCVButton;
