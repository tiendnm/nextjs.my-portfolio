import {
  mdiHomeOutline,
  mdiAccountOutline,
  mdiFileAccountOutline,
  mdiPostOutline,
  mdiCardAccountDetailsOutline,
} from "@mdi/js";
import Icon from "@mdi/react";

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
  // {
  //   text: "Contact",
  //   value: "contact",
  //   icon: (
  //     <Icon
  //       path={mdiCardAccountDetailsOutline}
  //       size={1}
  //     />
  //   ),
  // },
];
