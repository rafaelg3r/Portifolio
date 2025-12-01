import { useState } from "react";
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
  const [isHovering, setIsHovering] = useState(false);

  const baseCardClasses = `
    flex flex-col px-8 ${paddingTop} gap-14 ${height} ${width} 
    bg-linear-to-b from-neutral-950 to-stone-925 
    shadow-project-card rounded-2xl 
    relative z-1
  `;
  const commonProps = {
    onMouseEnter: () => setIsHovering(true),
    onMouseLeave: () => setIsHovering(false),
  };
  const parentClasses =
    "group p-2 outline-white-100 outline-1 -outline-offset-1 bg-linear-to-b from-neutral-950 to-stone-925 shadow-project-card rounded-2xl relative";

  if (link) {
    return (
      <div className={parentClasses} {...commonProps}>
        <div className="absolute top-0 left-0 right-0 h-px highlight-top z-1  "></div>
        <a
          id="linkContainer"
          href={link}
          target="_blank"
          className={`${baseCardClasses} ${isHovering ? "inset-shadow-project-card-hover" : "inset-shadow-project-card"}`}
        >
          {children}
          <div
            className={`teste0 transition-opacity duration-300 ease-in-out
              ${isHovering ? " teste1 opacity-100" : "teste1 opacity-0"}`}
          ></div>
        </a>
      </div>
    );
  } else {
    return (
      <div className={parentClasses}>
        <div className="absolute -top-px left-0 right-0 h-px highlight-top z-1"></div>
        <div className={`${baseCardClasses} `}>{children}</div>
      </div>
    );
  }
}
