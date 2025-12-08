type AboutProps = {
  children: React.ReactNode;
};

export function About({ children }: AboutProps) {
  return <div className="">
    <div>
      <img src="./src/assets/profile.png" alt="" />
    </div>
    <div>
    {children}
    </div>
    </div>;
}
