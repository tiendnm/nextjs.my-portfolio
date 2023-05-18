import { mdiOpenInNew } from "@mdi/js";
import Icon from "@mdi/react";
import styles from "./home.module.css";
import Link from "next/link";
import { myInformation } from "@variables";
const DownLoadCVButton = () => {
  return (
    <div
      data-sal="fade"
      data-sal-delay="300">
      <Link
        className={styles["btn-download-cv"]}
        href={`${myInformation.resume}`}
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
