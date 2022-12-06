import {
  mdiCellphone,
  mdiMapMarker,
  mdiEmailOutline,
  mdiCalendar,
} from "@mdi/js";
import Icon from "@mdi/react";

const PersonalInfo = () => {
  return (
    <div>
      <h3 className="mb-2.5 text-3xl font-medium text-gray-700 dark:text-white ">
        Personal Info
      </h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex">
          <span className="mr-2.5 flex w-12 items-center  justify-center rounded-md text-2xl text-gray-600 shadow-md dark:bg-gray-600 dark:text-white">
            <Icon
              path={mdiCellphone}
              size={1}
              className={"text-pink-500"}
            ></Icon>
          </span>
          <div className="space-y-1">
            <p className="text-xs dark:text-gray-500">Phone</p>
            <h6 className="font-medium text-gray-700 dark:text-white">
              <a
                className="transition duration-300 hover:text-[#33b1ff]"
                href="tel:+84397423971"
              >
                +84 397 423 971
              </a>
            </h6>
          </div>
        </div>
        <div className="flex">
          <span className="mr-2.5 flex w-12 items-center  justify-center rounded-md text-2xl text-gray-600 shadow-md dark:bg-gray-600 dark:text-white ">
            <Icon
              path={mdiMapMarker}
              size={1}
              className={"text-red-500"}
            ></Icon>
          </span>
          <div className="space-y-1">
            <p className="text-xs text-gray-600 dark:text-gray-500">Location</p>
            <h6 className="font-medium text-gray-700 dark:text-white">
              Ho Chi Minh City, Vietnam
            </h6>
          </div>
        </div>
        <div className="flex">
          <span className="mr-2.5 flex w-12 items-center  justify-center rounded-md text-2xl text-gray-600 shadow-md dark:bg-gray-600 dark:text-white ">
            <Icon
              path={mdiEmailOutline}
              size={1}
              className={"text-teal-500"}
            ></Icon>
          </span>
          <div className="space-y-1">
            <p className="text-xs text-gray-600 dark:text-gray-500">Email</p>
            <h6 className="font-medium text-gray-700 dark:text-white">
              <a
                className="transition duration-300 hover:text-[#33b1ff]"
                href="mailto:tien.dongocminh@gmail.com"
              >
                tien.dongocminh@gmail.com
              </a>
            </h6>
          </div>
        </div>
        <div className="flex">
          <span className="mr-2.5 flex w-12 items-center  justify-center rounded-md text-2xl text-gray-600 shadow-md dark:bg-gray-600 dark:text-white ">
            <Icon
              path={mdiCalendar}
              size={1}
              className={"text-blue-500"}
            ></Icon>
          </span>
          <div className="space-y-1">
            <p className="text-xs text-gray-600 dark:text-gray-500">Birthday</p>
            <h6 className="font-medium text-gray-700 dark:text-white">
              May 01, 1999
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PersonalInfo;
