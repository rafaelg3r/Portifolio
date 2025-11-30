type TechCardProps = {
  children: React.ReactNode;
};

export function TechCard({ children }: TechCardProps) {
    return (
      <div className="flex items-center justify-center gap-2 px-3 py-1 text-sm bg-neutral-950 text-white-900 inset-shadow-minicard shadow-minicard rounded-md relative">
        <div className="absolute -top-px left-0 right-0 h-px"></div>
        {children}
      </div>
    );
  
}
