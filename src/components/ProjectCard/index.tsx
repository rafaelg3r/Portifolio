type ProjectCardProps = {
  children: React.ReactNode;
};

export function ProjectCard({ children }: ProjectCardProps) {
  return (
    <div className="flex justify-center items-center p-2 w-fit bg-linear-to-b from-neutral-950 to-stone-925 shadow-project-card inset-shadow-project-card rounded-2xl relative">
      <div className="absolute -top-px left-0 right-0 h-px  text-amber-50 highlight-top  "></div>
      <div className="flex flex-col px-14 pt-20 gap-14 bg-linear-to-b from-neutral-950 to-stone-925 shadow-project-card inset-shadow-project-card rounded-2xl relative">
        {children}
      </div>
    </div>
  );
}
