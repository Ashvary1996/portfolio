import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Experience/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
