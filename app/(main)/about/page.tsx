import Image from "next/image";
import PageTitle from "./page_title";
import PersonalInfo from "./personal_info";
import WhatIDo from "./what_i_do";
import WhoAmI from "./who_am_i";

const About = () => {
  return (
    <div className="lg:pb-16">
      <div
        className="bg-white px-4 dark:bg-[#111111] sm:px-5 md:px-10 lg:rounded-2xl lg:px-20"
        data-aos="fade-right"
        data-aos-duration="200">
        <div className="py-12">
          <PageTitle text={"About me"} />
          <div className="grid grid-cols-12 items-center pt-4 md:gap-10 md:pt-[40px]">
            <div
              className="col-span-12 md:col-span-4"
              data-aos="fade-right"
              data-aos-duration="200">
              <Image
                width={330}
                height={380}
                src={"/avatar-1.jpeg"}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                alt="avatar"
                className="mb-3 w-full overflow-hidden rounded-[35px] object-cover md:mb-0 md:h-[380px] md:w-[330px]"
              />
            </div>
            <div className="col-span-12 space-y-2.5 md:col-span-8">
              <WhoAmI />
              <PersonalInfo />
            </div>
          </div>
        </div>
        <WhatIDo />
      </div>
    </div>
  );
};

export default About;
