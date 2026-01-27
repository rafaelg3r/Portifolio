type ButtonProps = {
  children: React.ReactNode;
  type: "default" | "gradient";
  isActive?: boolean;
  onClick?: () => void;
};
export function Button({ children, type, isActive, onClick }: ButtonProps) {
  switch (type) {
    case "default":
      return (
        <button
          onClick={onClick} // Adicionado o evento de clique
          className={`px-4 py-1.5 text-white-900 font-outfit text-sm rounded-3xl cursor-pointer transition-colors duration-200 text-shadow-simple ${
            isActive ? "bg-neutral-850" : "hover:bg-neutral-850"
          }`}
        >
          {children}
        </button>
      );
    case "gradient":
      return (
        <button className=" px-4 py-1.5 text-white-900 font-outfit text-md rounded-3xl cursor-pointer gradient-button text-shadow-simple hover:brightness-110 hover:translate-y-0.5 hover:scale-105 hover:shadow-highlight-button transition-all duration-300">
          {children}
        </button>
      );
    default:
      throw new Error(`Button type "${type}" is not supported`);
  }
}
