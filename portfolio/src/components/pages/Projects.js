import React from 'react'

const Projects = (props) => {
    return (
        <div>
            <section class="content-section" id="portfolio">
    <div class="container">
      <div class="content-section-heading text-center">
        <h3 class="text-secondary mb-0">Portfolio</h3>
        <h2 class="mb-5">Recent Projects</h2>
      </div>
      <div class="row no-gutters">
            {props.project.map(item => (
                <div class="col-lg-6">
                <a class="portfolio-item" href="#!">
                  <div class="caption">
                    <div class="caption-content">
                      <div class="h2">{item.name}</div>
                      <p class="mb-0">{item.description}</p>
                    </div>
                  </div>
                  <img class="img-fluid" src={item.image} alt=""></img>
                </a>
              </div>
            ))}
      </div>
      </div>
      
      </section>
        
        </div>

    )
}

export default Projects
