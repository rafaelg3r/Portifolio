import faceIcon from "../../assets/face-icon-fit.png";
type AboutProps = {
  children: React.ReactNode;
};

export function About({ children }: AboutProps) {
  const containerClasses = "bg-neutral-950 rounded-2xl p-4 "

  return (
    <div className="flex gap-2">
      <div className={containerClasses}>
        <img src={faceIcon} alt="" className="w-40 rounded-lg"/>
      </div>

      <div className={containerClasses}>
        <div>{children}</div>
      </div>
    </div>
  );
}
