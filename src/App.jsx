import "./App.css";
import { Contact, Experience, Hero, Projects } from "./components";

const App = () => {
  return (
    <section className="relative z-0">
      <div className="wrapper">
        <div className="z-10">
          <Hero />
        </div>
        <div className="relative z-30 bg-primary mt-[-2px]">
          <Projects />
        </div>
        <div className="relative z-30 bg-primary">
          <Experience />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </section>
  );
};

export default App;
