import clsx from "clsx";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: HeadingLevel;
}
export default function Heading({ level, className, children, ...props }: HeadingProps) {
  switch (level) {
    case 1:
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
    case 2:
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
    case 3:
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
    case 4:
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
    case 5:
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
    case 6:
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
    default:
      return <></>;
  }
}
