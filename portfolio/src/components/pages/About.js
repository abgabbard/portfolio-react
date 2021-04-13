import React from "react";

function About() {
  return (
    <div>
      <section class="content-section bg-light" id="about">
        <div class="container text-center">
          <div class="row">
            <div class="col-lg-10 mx-auto">
              <h2>
                I believe in creating a greater human experience by engaging,
                enabling, and elevating those around us. People in our
                communities, in our families, and in our workplace. Engage them
                in every capacity. Enable those around us by actively listening
                and contributing to the conversation. To the problem or
                challenge at hand. And elevate those around us by knowledge
                sharing, by sharing life and cultural perspective, and by
                resource sharing through collaboration.
              </h2>
              <p class="lead mb-5">
                I have shared experiences from my professional experience as well as projects from the Full Stack Web Development Bootcamp at the University of Arizona.
                <a href="https://unsplash.com/">Unsplash</a>!
              </p>
              <a class="btn btn-dark btn-xl js-scroll-trigger" href="/solutions">
                Check Out My Work!
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
