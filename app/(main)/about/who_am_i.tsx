import { myInformation } from "@variables";

const yearsOfExperience =
  new Date(
    new Date().getTime() - new Date(myInformation.firstDayOfWork).getTime()
  ).getFullYear() - 1970;

const content = [
  `Xin chào, tôi là Minh Tiến, một lập trình viên web và ứng dụng Power Platform với hơn ${yearsOfExperience} năm kinh nghiệm.`,
  `Tôi có sở trường tạo các giải pháp web linh hoạt và thân thiện với người dùng, tận dụng các công cụ Power Platform để tự động hóa quy trình công việc và cải thiện hiệu suất kinh doanh`,
  `Tôi thích khám phá những công nghệ và thách thức mới, đồng thời cung cấp các giải pháp hiệu quả đáp ứng nhu cầu của bạn.`,
  `Tôi luôn sẵn sàng kết nối và hợp tác trong các dự án thú vị, vậy nên hãy để tôi biến tầm nhìn của bạn thành hiện thực.`,
];
const WhoAmI = () => {
  return (
    <div
      data-sal="slide-right"
      data-sal-delay="300"
      className=" md:mr-12 xl:mr-16">
      <h3 className="mb-2.5 text-3xl font-medium text-gray-700 dark:text-white ">
        Tôi là ai?
      </h3>
      {content.map((row, index) => (
        <p
          key={index}
          className="leading-7  text-gray-800 dark:text-white/80">
          {row}
        </p>
      ))}
    </div>
  );
};
export default WhoAmI;
