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
      className="rounded-full w-56 h-56 2xl:w-60 2xl:h-60"
    ></Image>
  );
};
export default Avatar;
