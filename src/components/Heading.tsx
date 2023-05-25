import clsx from "clsx";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const H1 = ({ className, children, ...props }: HeadingProps) => {
  return (
    <h1
      {...props}
      className={clsx([
        "leading-7 text-gray-800 dark:text-white/80",
        "text-3xl",
        className,
      ])}>
      {children}
    </h1>
  );
};
const H2 = ({ className, children, ...props }: HeadingProps) => {
  return (
    <h2
      {...props}
      className={clsx([
        "leading-7 text-gray-800 dark:text-white/80",
        "text-2xl",
        className,
      ])}>
      {children}
    </h2>
  );
};
const H3 = ({ className, children, ...props }: HeadingProps) => {
  return (
    <h3
      {...props}
      className={clsx([
        "leading-7 text-gray-800 dark:text-white/80",
        "text-xl",
        className,
      ])}>
      {children}
    </h3>
  );
};
const H4 = ({ className, children, ...props }: HeadingProps) => {
  return (
    <h4
      {...props}
      className={clsx([
        "leading-7 text-gray-800 dark:text-white/80",
        "text-lg",
        className,
      ])}>
      {children}
    </h4>
  );
};
const H5 = ({ className, children, ...props }: HeadingProps) => {
  return (
    <h5
      {...props}
      className={clsx([
        "leading-7 text-gray-800 dark:text-white/80",
        "text-base",
        className,
      ])}>
      {children}
    </h5>
  );
};
const H6 = ({ className, children, ...props }: HeadingProps) => {
  return (
    <h6
      {...props}
      className={clsx([
        "leading-7 text-gray-800 dark:text-white/80",
        "text-sm",
        className,
      ])}>
      {children}
    </h6>
  );
};
const Heading = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
};
export default Heading;
