import React from "react";
import { Link, useLocation } from "react-router-dom";

function Menu() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/solutions"
          className={location.pathname === "/solutions" ? "nav-link active" : "nav-link"}
        >
          Solutions
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/projects"
          className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Closing"
          className={location.pathname === "/closing" ? "nav-link active" : "nav-link"}
        >
          Closing
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/onlineresume"
          className={location.pathname === "/onlineresume" ? "nav-link active" : "nav-link"}
        >
         Online Resume
        </Link>
      </li>
     
    </ul>
  );
}


export default Menu;
