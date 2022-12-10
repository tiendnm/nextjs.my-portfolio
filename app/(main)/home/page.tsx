import Avatar from "./avatar";
import DownLoadCVButton from "./download_cv_button";
import Name from "./name";
import SocialButtons from "./social_buttons";
export default function Home() {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center md:h-[90vh] lg:h-[80vh] xl:h-[71vh]">
      <Avatar />
      <Name />
      <SocialButtons />
      <DownLoadCVButton />
    </div>
  );
}
