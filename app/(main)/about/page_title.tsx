import clsx from "clsx";

interface PageTitleProps {
  text: string;
}
const PageTitle = ({ text }: PageTitleProps) => {
  return (
    <h2
      className={clsx([
        `relative mt-12 inline-block text-5xl font-medium text-gray-600 dark:text-white lg:mt-0`,
        `after:contents-[""] after:absolute after:top-1/2 after:left-56 after:h-0.5 after:w-36 after:bg-black`,
        `after:bg-gradient-to-r after:from-[#33b1ff] after:to-[#bc4aff]`,
      ])}>
      {text}
    </h2>
  );
};
export default PageTitle;
