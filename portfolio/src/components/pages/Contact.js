import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Closing";

function Contact(props) {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        abgabbard@gmail.com / www.linkedin.com/in/andrew-gabbard / github.com/abgabbard
      </p>
      <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link">
        Learn More
      </Link>{" "}
      <Link to="/contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Route exact path={`${props.match.url}/learn`} component={Learn} />
    </div>
  );
}

export default Contact;
