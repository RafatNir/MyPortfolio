import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import "./App.css";

// App: sets up client-side routing; the navbar and footer appear on every page
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        {/* Each route maps a URL path to one of the six pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <span>Rafat Islam</span>
        <span>Built with React</span>
      </footer>
    </BrowserRouter>
  );
}

export default App;