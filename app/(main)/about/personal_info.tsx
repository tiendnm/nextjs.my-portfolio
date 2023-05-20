import { mdiCellphone, mdiMapMarker, mdiEmailOutline, mdiCalendar } from "@mdi/js";
import Icon from "@mdi/react";
import { myInformation } from "@variables";
import moment from "moment";
import "moment/locale/vi";
moment.locale("vi");

const PersonalInfo = () => {
  const birthDay = moment(myInformation.birthDay).format("DD MMMM YYYY");
  return (
    <div
      data-sal="slide-right"
      data-sal-delay="300">
      <h3 className="mb-2.5 text-3xl font-medium text-gray-700 dark:text-white ">
        Thông tin cá nhân
      </h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex">
          <span className="mr-2.5 flex w-12 items-center  justify-center rounded-md text-2xl text-gray-800 shadow-md dark:bg-gray-600 dark:text-white">
            <Icon
              path={mdiCellphone}
              size={1}
              className={"text-pink-500"}></Icon>
          </span>
          <div className="space-y-1">
            <p className="text-xs text-gray-800 dark:text-white/80">Di động</p>
            <h6 className="font-medium text-gray-700 dark:text-white">
              <a
                className="transition duration-300 hover:text-[#33b1ff]"
                href={`tel:${myInformation.phoneNumber}`}>
                {myInformation.phoneNumber}
              </a>
            </h6>
          </div>
        </div>
        <div className="flex">
          <span className="mr-2.5 flex w-12 items-center  justify-center rounded-md text-2xl text-gray-800 shadow-md dark:bg-gray-600 dark:text-white ">
            <Icon
              path={mdiMapMarker}
              size={1}
              className={"text-red-500"}></Icon>
          </span>
          <div className="space-y-1">
            <p className="text-xs text-gray-800 dark:text-white/80">Địa chỉ</p>
            <h6 className="font-medium text-gray-700 dark:text-white">
              {myInformation.address}
            </h6>
          </div>
        </div>
        <div className="flex">
          <span className="mr-2.5 flex w-12 items-center  justify-center rounded-md text-2xl text-gray-800 shadow-md dark:bg-gray-600 dark:text-white ">
            <Icon
              path={mdiEmailOutline}
              size={1}
              className={"text-teal-500"}></Icon>
          </span>
          <div className="space-y-1">
            <p className="text-xs text-gray-800 dark:text-white/80">Email</p>
            <h6 className="font-medium text-gray-700 dark:text-white">
              <a
                className="transition duration-300 hover:text-[#33b1ff]"
                href={`mailto:${myInformation.email}`}>
                {myInformation.email}
              </a>
            </h6>
          </div>
        </div>
        <div className="flex">
          <span className="mr-2.5 flex w-12 items-center  justify-center rounded-md text-2xl text-gray-800 shadow-md dark:bg-gray-600 dark:text-white ">
            <Icon
              path={mdiCalendar}
              size={1}
              className={"text-blue-500"}></Icon>
          </span>
          <div className="space-y-1">
            <p className="text-xs text-gray-800 dark:text-white/80">Ngày sinh</p>
            <h6 className="font-medium text-gray-700 dark:text-white">{birthDay}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PersonalInfo;
