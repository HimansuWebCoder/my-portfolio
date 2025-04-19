import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Container/Layout/Layout";
import Home from "./Routes/Home/Home";
import About from "./Routes/About/About";
import Skills from "./Routes/Skills/Skills";
import Projects from "./Routes/Projects/Projects";
import Services from "./Routes/Services/Services";
import Contact from "./Routes/Contact/Contact";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<Projects />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
