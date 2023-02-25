import { myInformation } from "@variables";

const yearsOfExperience =
  new Date(
    new Date().getTime() - new Date(myInformation.firstDayOfWork).getTime()
  ).getFullYear() - 1970;

const content = [
  `Xin chào, tôi là một lập trình viên với hơn ${yearsOfExperience} năm kinh nghiệm.`,
  `Trong suốt sự nghiệp của mình, tôi đã làm việc trên nhiều dự án khác nhau. Tôi có
        thể làm việc với cả front-end và back-end, và tôi thích sử dụng chuyên môn của
        mình để tạo ra những giải pháp tinh tế và hiệu quả cho những vấn đề phức tạp.`,
  `Ngoài ra, tôi còn rất đam mê học hỏi và tìm hiểu những công nghệ mới. Tôi luôn
        muốn thử thách bản thân để hoàn thiện kỹ năng và đạt được mục tiêu của mình.`,
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
          className="leading-7  text-gray-600 dark:text-gray-400">
          {row}
        </p>
      ))}
    </div>
  );
};
export default WhoAmI;
