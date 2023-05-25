import { mdiOpenInNew } from "@mdi/js";
import Icon from "@mdi/react";
import styles from "./home.module.css";
import Link from "next/link";
import { myInformation } from "@variables";
import CustomLink from "@components/CustomLink";
const DownLoadCVButton = () => {
  return (
    <div
      data-sal="fade"
      data-sal-delay="300">
      <CustomLink
        className={styles["btn-download-cv"]}
        href={`${myInformation.resume}`}
        target="_blank">
        <Icon
          path={mdiOpenInNew}
          size={1}></Icon>
        Xem CV
      </CustomLink>
    </div>
  );
};
export default DownLoadCVButton;
