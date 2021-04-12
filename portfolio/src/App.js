import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Solutions from "./components/pages/Solutions";
import Contact from "./components/pages/Contact";
import Closing from "./components/pages/Closing"
import Projects from "./components/pages/Projects"
import OnlineResume from "./components/pages/OnlineResume";
import Footer from "./components/pages/Footer";

const project = [
    {
      id: 1,
      name: "Burger App",
      description: "Silly Burger App",
      image: "/assets/images/burgerThumbnail.jpg",

    }
];

function App() {
  return (
    <Router>
      <div>
      < Home /> 
      < About />
      < Solutions />
      < Closing />
      < Projects project={project}/>
      < OnlineResume />
      < Footer />
      </div>
    </Router>
  );
}

export default App;
