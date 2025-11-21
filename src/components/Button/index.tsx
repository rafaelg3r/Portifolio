type ButtonProps = {
  children: React.ReactNode;
  type: "default" | "gradient";
  isActive: boolean;
};
export function Button({ children, type, isActive }: ButtonProps) {
  switch (type) {
    case "default":
      return isActive ? (
        <button className="px-4 py-1.5 text-white font-outfit text-sm rounded-3xl cursor-pointer bg-neutral-850">
          {children}
        </button>
      ) : (
        <button className="px-4 py-1.5 text-white font-outfit text-sm rounded-3xl cursor-pointer hover:bg-neutral-850">
          {children}
        </button>
      );
    case "gradient":
      return (
        <button className=" px-4 py-1.5 text-white font-outfit text-sm rounded-3xl cursor-pointer gradient-royal hover:brightness-110 hover:translate-y-0.5 hover:shadow-highlight transition-all">
          {children}
        </button>
      );
    default:
      throw new Error(`Button type "${type}" is not supported`);
  }
}
