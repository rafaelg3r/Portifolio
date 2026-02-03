import { Hero } from "./sections/Hero.tsx";
import { About } from "./sections/About.tsx";
import { Projects } from "./sections/Projects.tsx";
import { Skills } from "./sections/Skills.tsx";

function App() {
  return (
    <main className="lg:px-40 md:px-14 px-5 flex flex-col gap-10">
      <Hero />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}

export default App;
