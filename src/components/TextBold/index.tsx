type TextGradProps = {
  children: React.ReactNode;
  type: "purple-pink" | "pink-orange" | "purple-orange";
};
export function TextGrad({ children, type }: TextGradProps) {
  switch (type) {
    case "purple-pink":
      return (
        <span className="bg-linear-to-r from-purple-1 to-pink-1 inline-block text-transparent bg-clip-text ">
          {children}
        </span>
      );
    case "pink-orange":
      return (
        <span className="bg-linear-to-r from-pink-1 to-orange-1 inline-block text-transparent bg-clip-text ">
          {children}
        </span>
      );
    case "purple-orange":
      return (
        <span className="bg-linear-to-r from-purple-1 to-orange-1 inline-block text-transparent bg-clip-text ">
          {children}
        </span>
      );
    default:
      throw new Error(`Button type "${type}" is not supported`);
  }
}
