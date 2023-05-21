import clsx from "clsx";

interface GlassProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Glass({ className, children, ...props }: GlassProps) {
  return (
    <div className={clsx([" lg:h-auto", "lg:pb-5", "flex items-stretch justify-center"])}>
      <div
        className={clsx([
          "w-full lg:min-h-[71vh]",
          "px-4 sm:px-5 md:px-10 lg:px-20 lg:pb-0",
          "bg-white/20 backdrop-blur-2xl transition-colors delay-300 duration-1000 dark:bg-gray-800/40 lg:rounded-2xl",
          "border border-t-white/40 border-b-white/20 border-l-white/20 border-r-white/40",
          "dark:border-r-white/30 dark:border-l-white/10 dark:border-b-white/10 dark:border-t-white/30 ",
          "shadow-lg shadow-black/20 ",
          className,
        ])}>
        <div
          className={clsx([
            "flex min-h-[calc(100vh-2px)] items-stretch py-20 lg:min-h-min",
          ])}>
          {children}
        </div>
      </div>
    </div>
  );
}
