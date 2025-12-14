import faceIcon from "../../assets/face-icon.png";
type AboutProps = {
  children: React.ReactNode;
};

export function About({ children }: AboutProps) {
  const containerClasses = "bg-neutral-950 rounded-2xl p-5 "

  return (
    <div className="flex gap-2">
      <div className={containerClasses}>
        <img src={faceIcon} alt="" className="w-50"/>
      </div>

      <div className={containerClasses}>
        <div>{children}</div>
      </div>
    </div>
  );
}
