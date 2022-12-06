import Avatar from "./avatar";
import DownLoadCVButton from "./download_cv_button";
import Name from "./name";
import SocialButtons from "./social_buttons";
export default function Home() {
  return (
    <div className="flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh] xl:h-[71vh] justify-center">
      <Avatar />
      <Name />
      <SocialButtons />
      <DownLoadCVButton />
    </div>
  );
}
