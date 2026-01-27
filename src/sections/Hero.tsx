import { BackgroundGrid } from "../components/BackgroundGrid";
import { Button } from "../components/Button";
export function Hero() {
  return (
    <>
      <BackgroundGrid />  
      <div className="mt-21 flex flex-col items-center  justify-center gap-8 h-[700px] background-hero">
        <h1 className="text-6xl text-center text-lemon-100 font-grotesk max-w-6xl">
          Projetando e{" "}
          <span className="font-pixelify italic text-indigo-500">
            desenvolvendo
          </span>{" "}
          sites{" "}
          <span className="font-playfair italic text-indigo-500">
            visualmente{" "}
          </span>
          impactantes.
        </h1>
        <p className="text-lg text-lavander-100">
          Crio experiências digitais que impulsionam seu negócio.
        </p>
        <div className="">
          <Button type="default"  >a</Button>
          <Button type="default"  >b</Button>
        </div>
      </div>
    </>
  );
}
