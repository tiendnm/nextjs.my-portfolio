import Image from "next/image";
import { BLUR_URL } from "@variables";
import Paragraph from "@components/Paragraph";
import Heading from "@components/Heading";
import AboutSection from "./section";
import PersonalInfo from "./personal_info";
export const metadata = {
  title: "Thông tin",
  openGraph: {
    title: "Thông tin - Tiến Đỗ",
    description: "Thông tin cá nhân của Tiến Đỗ",
    url: "https://www.tien-dnm.com/about",
    siteName: "Thông tin - Tiến Đỗ",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 627,
      },
    ],
    locale: "vi-VN",
    type: "website",
  },
};
const About = () => {
  return (
    <>
      <div className="w-full">
        <main className="flex flex-col gap-8">
          <AboutSection imageLink="/avatar-1.jpeg">
            <Heading.H2>Về mình</Heading.H2>
            <Paragraph>
              Xin chào, mình là Minh Tiến, một lập trình viên web và ứng dụng Power
              Platform đầy nhiệt huyết. Với niềm đam mê không ngừng khám phá những công
              nghệ và thách thức mới, mình không chỉ mong muốn mang lại những giải pháp
              hiệu quả, mà còn đặc biệt quan tâm đến việc đáp ứng tối đa nhu cầu của các
              bạn.
            </Paragraph>
            <Paragraph>
              Mình luôn sẵn lòng hợp tác và kết nối trong mọi dự án thú vị. Từ ý tưởng ban
              đầu của các bạn, mình cam kết sẽ biến tầm nhìn đó thành hiện thực với sự tận
              tâm và chuyên môn của mình. Hãy đồng hành cùng mình để chúng ta có thể xây
              dựng những điều phi thường.
            </Paragraph>
          </AboutSection>
          {/* <AboutSection
            imageLink="/about-contact.jpg"
            reverse>
            <Heading.H2>Thông tin liên hệ</Heading.H2>
            <PersonalInfo />
          </AboutSection> */}
          <AboutSection
            imageLink="/about-banner.jpg"
            reverse>
            <Heading.H2>Về trang web này</Heading.H2>
            <Paragraph>
              Được tạo ra trong thời gian rảnh rỗi của bản thân, nhằm mục đích giới thiệu
              về những dự án tuyệt vời mà mình đã tham gia và hoàn thành. Mình rất háo hức
              được chia sẻ những thành tựu đáng tự hào của mình với các bạn.
            </Paragraph>
            <Paragraph>
              Tuy nhiên, không đơn thuần là một bộ sưu tập các dự án, mình còn muốn dùng
              chia sẻ kiến thức và kinh nghiệm lập trình cho mọi người trên trang web này.
              Mình sẽ đăng những bài viết cung cấp những thông tin hữu ích và chia sẻ kinh
              nghiệm lập trình đa dạng.
            </Paragraph>
            <Paragraph>
              Đây là cơ hội tuyệt vời để chia sẻ kiến thức của mình và cùng mọi người tạo
              ra một cộng đồng học hỏi và trao đổi thông tin
            </Paragraph>
          </AboutSection>
        </main>
      </div>
    </>
  );
};

export default About;
