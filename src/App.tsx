import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      {/* <Navbar /> */}

      <About />

      <Experience />

      <Skills />

      <Projects />
    </div>
  )
}

export default App
