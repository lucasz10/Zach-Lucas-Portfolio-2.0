import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header, Footer, Navigation } from "./components";

import { AboutMe, Contact, Portfolio, Resume } from "./pages";

function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <Navigation />
        <div className="container">
          <Routes>
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
