import React from "react";

function Home() {
  return (
    <div>
  <a class="menu-toggle rounded" href="#">
    <i class="fas fa-bars"></i>
  </a>
  <nav id="sidebar-wrapper">
    <ul class="sidebar-nav">
      <li class="sidebar-brand">
        <a class="js-scroll-trigger" href="#page-top">Start Bootstrap</a>
      </li>
      <li class="sidebar-nav-item">
        <a class="js-scroll-trigger" href="#page-top">Home</a>
      </li>
      <li class="sidebar-nav-item">
        <a class="js-scroll-trigger" href="#about">About</a>
      </li>
      <li class="sidebar-nav-item">
        <a class="js-scroll-trigger" href="#services">Services</a>
      </li>
      <li class="sidebar-nav-item">
        <a class="js-scroll-trigger" href="#portfolio">Portfolio</a>
      </li>
      <li class="sidebar-nav-item">
        <a class="js-scroll-trigger" href="#contact">Contact</a>
      </li>
    </ul>
  </nav>
  <header class="masthead d-flex">
    <div class="container text-center my-auto">
      <h1 class="mb-1">Stylish Portfolio</h1>
      <h3 class="mb-5">
        <em>A Free Bootstrap Theme by Start Bootstrap</em>
      </h3>
      <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
    </div>
    <div class="overlay"></div>
  </header>
    </div>
  );
}

export default Home;
