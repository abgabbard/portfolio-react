import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Solutions from "./components/pages/Solutions";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div>
      < Home /> 
      < About />
      < Solutions />
      </div>
    </Router>
  );
}

export default App;
