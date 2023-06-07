import { BLUR_URL } from "@variables";
import clsx from "clsx";
import Image from "next/image";

interface AboutSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  imageLink: string;
  reverse?: boolean;
}

export default function AboutSection({
  imageLink,
  children,
  reverse = false,
  ...props
}: AboutSectionProps) {
  return (
    <section
      data-sal={reverse ? "slide-right" : "slide-left"}
      data-sal-delay="300"
      data-sal-easing="ease-out-back"
      className={clsx([
        "flex w-full items-stretch gap-5 rounded-lg backdrop-blur-sm md:flex-row md:backdrop-blur-none",
        reverse ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row",
      ])}>
      <div className="relative h-52 w-full object-cover md:h-auto md:max-w-[16rem]">
        <Image
          fill
          src={imageLink}
          placeholder="blur"
          blurDataURL={BLUR_URL}
          alt="Hình ảnh"
          className={clsx([
            reverse
              ? " rounded-t-lg md:rounded-lg"
              : "rounded-t-lg md:rounded-lg",
            "z-10 overflow-hidden object-cover md:rounded-none",
          ])}
          sizes="(max-width: 786px) 256px, 700px"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-4 leading-normal">
        {children}
      </div>
    </section>
  );
}
