import {
  mdiHomeOutline,
  mdiAccountOutline,
  mdiFileAccountOutline,
  mdiPostOutline,
  mdiCardAccountDetailsOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import { PersonalInformation } from "@types";

export const navigationMenu = [
  {
    text: "Home",
    value: "home",
    icon: (
      <Icon
        path={mdiHomeOutline}
        size={1}
      />
    ),
  },
  {
    text: "About",
    value: "about",
    icon: (
      <Icon
        path={mdiAccountOutline}
        size={1}
      />
    ),
  },
  {
    text: "Blogs",
    value: "blogs",
    icon: (
      <Icon
        path={mdiPostOutline}
        size={1}
      />
    ),
  },
];
export const myInformation: PersonalInformation = {
  name: "Đỗ Ngọc Minh Tiến",
  birthDay: new Date(1999, 4, 1),
  firstDayOfWork: new Date(2020, 2, 15),
  jobTitle: "Lập trình viên",
  phoneNumber: "+84 397 423 971",
  email: "tien.dnm@outlook.com",
  address: "Ho Chi Minh City, Vietnam",
};
