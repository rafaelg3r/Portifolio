import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectCard } from "./components/ProjectCard";
function App() {
  return (
    <div className="px-28 flex flex-col gap-16">
      <Header />
      <div className="flex justify-center items-center">
        <ProjectCard>
          <div className="absolute flex justify-between items-center px-3 -top-px left-0 right-0 h-10 rounded-t-2xl bg-linear-to-r  from-white-100 via-white-500 to-white-100">
            <div className="absolute top-0 left-0 right-0 h-px  text-amber-50 highlight-top"></div>
            <div className="flex gap-3">
              <div className="w-12 h-4 bg-white-900 rounded-3xl shadow-ball inset-shadow-ball"></div>
              <div className="w-4 h-4 bg-white-900 rounded-3xl shadow-ball inset-shadow-ball"></div>
            </div>
            <div className="flex gap-3">
              <div className="w-4 h-4 bg-white-900 rounded-3xl shadow-ball inset-shadow-ball"></div>
              <div className="w-4 h-4 bg-white-900 rounded-3xl shadow-ball inset-shadow-ball"></div>
              <div className="w-4 h-4 bg-white-900 rounded-3xl shadow-ball inset-shadow-ball"></div>
            </div>
          </div>
          <Hero />
          <div className="">
            
          </div>
        </ProjectCard>
      </div>
    </div>
  );
}

export default App;
