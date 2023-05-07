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
  name: `${process.env.NAME}`,
  birthDay: new Date(`${process.env.DOB}`),
  firstDayOfWork: new Date(`${process.env.FIRSTDAYOFWORK}`),
  jobTitle: `${process.env.JOBTITLE}`,
  phoneNumber: `${process.env.PHONE}`,
  email: `${process.env.EMAIL}`,
  address: `${process.env.ADDRESS}`,
  linkedIn: `${process.env.LINKEDIN}`,
  github: `${process.env.GITHUB}`,
  facebook: `${process.env.FACEBOOK}`,
  twitter: `${process.env.TWITTER}`,
  resume: `${process.env.RESUME}`,
};
