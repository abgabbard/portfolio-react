import React from "react";
import { Link, useLocation } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <div class="container">
        <div class="content-section-heading text-center">
          <h3 class="text-secondary mb-0">Portfolio</h3>
          <h2 class="mb-5">Recent Projects</h2>
        </div>
        <div class="row no-gutters">
          <div class="col-lg-6">
            <a class="portfolio-item" href="#!">
              <div class="caption">
                <div class="caption-content">
                 <div class="h2">weGOLF - golf score card and tracking app</div>
                 <a href="https://github.com/Brando2147/weGOLF" target="_blank"><p class="mb-0">
                    weGOLF
                  </p></a>
                </div>
              </div>
              <img class="img-fluid" src="/assets/images/wegolflogo.png" alt="NodeExpressBurgerApp"></img>
            </a>
          </div>
          <div class="col-lg-6">
            <a class="portfolio-item" href="#!">
              <div class="caption">
                <div class="caption-content">
                  <div class="h2">Collect 'Em All!</div>
                  <p class="mb-0">
                    Card Collection Tracker
                  </p>
                </div>
              </div>
              <img class="img-fluid" src="/assets/images/collectemallThumbnail.jpg" alt="NodeExpressBurgerApp"></img>
            </a>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-lg-6">
            <a class="portfolio-item" href="#!">
              <div class="caption">
                <div class="caption-content">
                  <div class="h2">Pitch A Tent</div>
                  <p class="mb-0">
                    State campsite search
                  </p></div>
                </div>
              
              <img class="img-fluid" src="/assets/images/pitchatent.png" alt="NodeExpressBurgerApp"></img>
            </a>
          </div>
        {/* </div> */}
        {/* <div class="row no-gutters"> */}
          <div class="col-lg-6">
            <a class="portfolio-item" href="#!">
              <div class="caption">
                <div class="caption-content">
                  <div class="h2">getFIT Fitness Tracker!</div>
                  <p class="mb-0">
                    Fitness App
                  </p>
                </div>
              </div>
              <img class="img-fluid" src="/assets/images/getfit03.png" alt="NodeExpressBurgerApp"></img>
            </a>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-lg-6">
            <a class="portfolio-item" href="#!">
              <div class="caption">
                <div class="caption-content">
                  <div class="h2">Devour a Burger I Dare You!</div>
                  <p class="mb-0">
                    Burger Devour App
                  </p>
                </div>
              </div>
              <img class="img-fluid" src="/assets/images/wegolflogo.png" alt="NodeExpressBurgerApp"></img>
            </a>
          </div>
        {/* </div> */}
        {/* <div class="row no-gutters"> */}
          <div class="col-lg-6">
            <a class="portfolio-item" href="#!">
              <div class="caption">
                <div class="caption-content">
                  <div class="h2">Tiers!</div>
                  <p class="mb-0">
                    API Generated SuperHeroes!
                  </p>
                </div>
              </div>
              <img class="img-fluid" src="/assets/images/tiers01.png" alt="NodeExpressBurgerApp"></img>
            </a>
          </div>
        </div>
        <div>
        <a
                class="btn btn-dark btn-xl js-scroll-trigger"
                href="/closing"
              >
                Closing Remarks!
              </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
