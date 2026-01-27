import { Hero } from "./sections/Hero.tsx";
import { About } from "./sections/About.tsx";
import { Projects } from "./sections/Projects.tsx";
import { Skills } from "./sections/Skills.tsx";

function App() {
  return (
    <div className="px-[100px]">
      <Hero />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
