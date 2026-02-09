type SectionTitleProps = {
  title: string;
  className?: string;
};
export function Title({ title, className }: SectionTitleProps) {
  return (
    <h1
      className={`text-5xl text-lemon-100 font-bold tracking-tighter font-jetbrains ${className}`}
    >
      {title}
    </h1>
  );
}
