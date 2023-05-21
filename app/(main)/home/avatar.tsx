import { BLUR_URL } from "@variables";
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="relative h-64 w-64">
      <Image
        data-sal="zoom-in"
        data-sal-delay="300"
        data-sal-easing="ease-out-back"
        fill
        src={"/avatar-home.jpg"}
        placeholder="blur"
        blurDataURL={BLUR_URL}
        alt="avatar"
        className="aspect-square overflow-hidden rounded-full object-cover"
        sizes="(max-width: 786px) 256px, 700px"
      />
    </div>
  );
};
export default Avatar;
