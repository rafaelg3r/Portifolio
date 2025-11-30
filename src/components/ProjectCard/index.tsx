type ProjectCardProps = {
  children: React.ReactNode;
  height: string;
  width?: string;
  padTop?: string;
  link?: string;
};

export function ProjectCard({
  children,
  height,
  padTop,
  width,
  link,
}: ProjectCardProps) {
  const paddingTop = padTop ? padTop : "pt-14";
  const hoverBg = "";
  const linkHovered = document.getElementById("linkContainer");
  if (linkHovered)
    if (!link) {
      return (
        <div className=" p-2 outline-white-100 outline-1 -outline-offset-1 bg-linear-to-b from-neutral-950 to-stone-925 shadow-project-card  rounded-2xl relative">
          <div className="absolute -top-px left-0 right-0 h-px highlight-top z-1  "></div>
          <div
            className={`flex flex-col px-8 ${paddingTop} gap-14 ${height} ${width} bg-linear-to-b from-neutral-950 to-stone-925 shadow-project-card inset-shadow-project-card rounded-2xl relative `}
          >
            {children}
          </div>
        </div>
      );
    } else {
      return (
        <div className=" p-2 outline-white-100 outline-1 -outline-offset-1 bg-linear-to-b from-neutral-950 to-stone-925 shadow-project-card  rounded-2xl relative">
          <div className="absolute -top-px left-0 right-0 h-px highlight-top z-1  "></div>
          <a
            id="linkContainer"
            href={link}
            target="_blank"
            className={`flex flex-col px-8 ${paddingTop} gap-14 ${height} ${width} bg-linear-to-b from-neutral-950 to-stone-925 shadow-project-card inset-shadow-project-card rounded-2xl relative `}
          >
            <div
              className={`absolute top-0 left-0 right-0 bottom-0 z-0 rounded-2xl ${hoverBg}`}
            ></div>
            {children}
          </a>
        </div>
      );
    }
}
