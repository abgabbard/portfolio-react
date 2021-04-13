import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Solutions from "./components/pages/Solutions";
// import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume"
import Projects from "./components/pages/Projects"
import Closing from "./components/pages/Closing";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <Router>
      <div>
      < Menu />
      <Route exact path="/" component={Home} /> 
      <Route exact path="/about" component={About} />
      <Route exact path="/solutions" component={Solutions} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/closing" component={Closing} />
      < Footer />
      </div>
     </Router>
  );
}

export default App;
