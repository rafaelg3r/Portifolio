type ButtonProps = {
  children: React.ReactNode;
  type: "default" | "gradient";
  isActive: boolean;
};
export function Button({ children, type, isActive }: ButtonProps) {
  switch (type) {
    case "default":
      return isActive ? (
        <button className="px-4 py-1.5 text-white-900 font-outfit text-sm rounded-3xl cursor-pointer bg-neutral-850 text-shadow-simple">
          {children}
        </button>
      ) : (
        <button className="px-4 py-1.5 text-white-900 font-outfit text-sm rounded-3xl cursor-pointer hover:bg-neutral-850 text-shadow-simple">
          {children}
        </button>
      );
    case "gradient":
      return (
        <button className=" px-4 py-1.5 text-white-900 font-outfit text-md rounded-3xl cursor-pointer gradient-royal text-shadow-simple hover:brightness-110 hover:translate-y-0.5 hover:scale-105 hover:shadow-highlight-royal transition-all duration-300">
          {children}
        </button>
      );
    default:
      throw new Error(`Button type "${type}" is not supported`);
  }
}
