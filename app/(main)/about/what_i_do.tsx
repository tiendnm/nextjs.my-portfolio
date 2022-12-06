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
      <h3 className="pb-5 text-3xl font-medium text-gray-700 dark:text-white ">
        What I do!
      </h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
        <div className="flex gap-4 rounded-3xl bg-blue-50 p-7 dark:border dark:border-gray-500 dark:bg-transparent">
          <div>
            <Icon
              path={mdiFormatListCheckbox}
              size={2}
              className={"text-blue-400"}
            />
          </div>
          <div className="space-y-2 break-all">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
              Project Management
            </h3>
            <p className=" leading-8 text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              euismod volutpat.
            </p>
          </div>
        </div>
        <div className="flex gap-4 rounded-3xl bg-fuchsia-50 p-7 dark:border dark:border-gray-500 dark:bg-transparent">
          <div>
            <Icon path={mdiChip} size={2} className={" text-fuchsia-400"} />
          </div>
          <div className="space-y-2 break-all">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
              Technical Lead
            </h3>
            <p className=" leading-8 text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              euismod volutpat.
            </p>
          </div>
        </div>
        <div className="flex gap-4 rounded-3xl bg-teal-50 p-7 dark:border dark:border-gray-500 dark:bg-transparent">
          <div>
            <Icon path={mdiPoll} size={2} className={" text-teal-400"} />
          </div>
          <div className="space-y-2 break-all">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
              Data Analysis
            </h3>
            <p className=" leading-8 text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              euismod volutpat.
            </p>
          </div>
        </div>
        <div className="flex gap-4 rounded-3xl bg-orange-50 p-7 dark:border dark:border-gray-500 dark:bg-transparent">
          <div>
            <Icon path={mdiDatabase} size={2} className={" text-orange-400"} />
          </div>
          <div className="space-y-2 break-all">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
              Database Design
            </h3>
            <p className=" leading-8 text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              euismod volutpat.
            </p>
          </div>
        </div>
        <div className="flex gap-4 rounded-3xl bg-yellow-50 p-7 dark:border dark:border-gray-500 dark:bg-transparent">
          <div>
            <Icon
              path={mdiApplicationBraces}
              size={2}
              className={" text-yellow-400"}
            />
          </div>
          <div className="space-y-2 break-all">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
              App Development
            </h3>
            <p className=" leading-8 text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              euismod volutpat.
            </p>
          </div>
        </div>
        <div className="flex gap-4 rounded-3xl bg-cyan-50 p-7 dark:border dark:border-gray-500 dark:bg-transparent">
          <div>
            <Icon path={mdiWeb} size={2} className={"text-cyan-400"} />
          </div>
          <div className="space-y-2 break-all">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
              Web Development
            </h3>
            <p className=" leading-8 text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              euismod volutpat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
