import clsx from "clsx";

export default function Paragraph({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      {...props}
      className={clsx(["leading-7 text-gray-800 dark:text-white/80", className])}>
      {children}
    </p>
  );
}
