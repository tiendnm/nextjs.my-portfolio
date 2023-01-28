import {
  mdiFormatListCheckbox,
  mdiChip,
  mdiPoll,
  mdiDatabase,
  mdiApplicationBraces,
  mdiWeb,
} from "@mdi/js";
import Icon from "@mdi/react";

const WhatIDo = () => {
  return (
    <div className="pb-12">
      <h3
        className="pb-5 text-3xl font-medium text-gray-700 dark:text-white "
        data-aos="fade-right"
        data-aos-duration="100">
        What I do!
      </h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
        <div
          data-aos="fade-right"
          data-aos-duration="400"
          className="flex gap-4 rounded-3xl bg-blue-200/50 p-7 backdrop-blur-sm dark:border dark:border-gray-500 dark:bg-blue-100/5">
          <div>
            <Icon
              path={mdiFormatListCheckbox}
              size={2}
              className={"text-blue-500"}
            />
          </div>
          <div className="space-y-2 break-all">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
              Project Management
            </h3>
            <p className=" leading-8 text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod
              volutpat.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          className="flex gap-4 rounded-3xl bg-fuchsia-200/50 p-7 backdrop-blur-sm dark:border dark:border-gray-500 dark:bg-fuchsia-100/5">
          <div>
            <Icon
              path={mdiChip}
              size={2}
              className={" text-fuchsia-500"}
            />
          </div>
          <div className="space-y-2 break-all">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
              Technical Lead
            </h3>
            <p className=" leading-8 text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod
              volutpat.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="600"
          className="flex gap-4 rounded-3xl bg-teal-200/50 p-7 backdrop-blur-sm dark:border dark:border-gray-500 dark:bg-teal-200/5">
          <div>
            <Icon
              path={mdiPoll}
              size={2}
              className={" text-teal-500"}
            />
          </div>
          <div className="space-y-2 break-all">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
              Data Analysis
            </h3>
            <p className=" leading-8 text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod
              volutpat.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          className="flex gap-4 rounded-3xl bg-orange-200/50 p-7 backdrop-blur-sm dark:border dark:border-gray-500 dark:bg-orange-100/5">
          <div>
            <Icon
              path={mdiDatabase}
              size={2}
              className={" text-orange-500"}
            />
          </div>
          <div className="space-y-2 break-all">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
              Database Design
            </h3>
            <p className=" leading-8 text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod
              volutpat.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          className="flex gap-4 rounded-3xl bg-yellow-200/50 p-7 backdrop-blur-sm dark:border dark:border-gray-500 dark:bg-yellow-100/5">
          <div>
            <Icon
              path={mdiApplicationBraces}
              size={2}
              className={" text-yellow-500"}
            />
          </div>
          <div className="space-y-2 break-all">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
              App Development
            </h3>
            <p className=" leading-8 text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod
              volutpat.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="600"
          className="flex gap-4 rounded-3xl bg-cyan-200/50 p-7 backdrop-blur-sm dark:border dark:border-gray-500 dark:bg-cyan-100/5">
          <div>
            <Icon
              path={mdiWeb}
              size={2}
              className={"text-cyan-500"}
            />
          </div>
          <div className="space-y-2 break-all">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
              Web Development
            </h3>
            <p className=" leading-8 text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod
              volutpat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
