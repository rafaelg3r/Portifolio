import { useState } from "react";

type ProjectCardProps = {
  children: React.ReactNode | ((isHovering: boolean) => React.ReactNode);
  height: string;
  width?: string;
  padTop?: string;
  link?: string;
  hoverClass?: "domHoverBg" | "classmindHoverBg" | "portifolioHoverBg";
};

export function ProjectCard({
  children,
  height,
  padTop,
  width,
  link,
  hoverClass,
}: ProjectCardProps) {
  const paddingTop = padTop ? padTop : "pt-14";
  const [isHovering, setIsHovering] = useState(false);

  const baseCardClasses = `
    flex flex-col px-8 ${paddingTop} gap-14 ${height} ${width} 
    bg-linear-to-b from-neutral-950/60 to-stone-925/60 
     shadow-project-card rounded-[10px] relative z-1
  `;
  const commonProps = {
    onMouseEnter: () => setIsHovering(true),
    onMouseLeave: () => setIsHovering(false),
  };
  const parentClasses =
    "group p-2 outline-white-100 outline-1 -outline-offset-1 bg-linear-to-b from-neutral-950/60 to-stone-925/60 backdrop-blur-sm shadow-project-card rounded-lg relative";

  const content =
    typeof children === "function" ? children(isHovering) : children;

  if (link) {
    return (
      <div className={parentClasses} {...commonProps}>
        <div className="absolute top-0 left-0 right-0 h-px highlight-top z-1"></div>
        <a
          id="linkContainer"
          href={link}
          target="_blank"
          className={`${baseCardClasses} ${isHovering ? "inset-shadow-project-card-hover" : "inset-shadow-project-card"}`}
        >
          {content}
          <div
            className={`${hoverClass} transition-opacity duration-300 ease-in-out
              ${isHovering ? " teste1 opacity-100" : "teste1 opacity-0"}`}
          ></div>
        </a>
      </div>
    );
  } else {
    return (
      <div className={parentClasses}>
        <div className="absolute -top-px left-0 right-0 h-px highlight-top z-1"></div>
        <div className={`${baseCardClasses}`}>{content}</div>
      </div>
    );
  }
}
