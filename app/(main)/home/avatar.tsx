import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      width={200}
      height={200}
      src={"/avatar-1.jpeg"}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
      alt="avatar"
      className="h-56 w-56 rounded-full 2xl:h-60 2xl:w-60"
      data-aos="fade-left"
      data-aos-duration="100"
    />
  );
};
export default Avatar;
