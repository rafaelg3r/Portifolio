export function Hero() {
  return (
    <div className="flex w-fit">
      <div className="flex justify-between flex-col">
        <div className="flex justify-between">
          <span className="text-2xl font-jetbrains-mono text-white-600">
            Desenvolvedor Front-End
          </span>
        </div>
        <h1 className="font-pixelify text-6xl text-white-900 text-shadow-white ">
          RAFAEL DA COSTA VEDANA
        </h1>
        <div className="flex gap-8 items-center justify-center">
          <div className="w-full h-1.5 gradient-royal rounded-4xl"></div>
          <span className="text-2xl font-jetbrains-mono text-white-600 whitespace-nowrap ">
            Web Designer
          </span>
        </div>
      </div>
      <div className="w-8 h-8 gradient-royal rounded-4xl"></div>
    </div>
  );
}
