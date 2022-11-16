import { Fragment } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import Hero from "../components/Hero";

function HomePage() {
  // document.body.classList.remove("show");

  return (
    <Fragment>
      <Navbar selected="Home" />
      <div className="page">
        <Hero />
        <div id="projects" className="content container">
          <div className="project-title">
            <h2 className="project-header">Our Projects</h2>
          </div>
          <div className="project-lb"></div>
          <div className="project-cards">
            <ProjectCard
              src="/project1.jpg"
              text="Blue & rose gold kitchen"
              link="https://www.instagram.com/p/Ck_h8sVIfPW/"
            />
            <ProjectCard
              src="/project3.jpg"
              text="Marble & grey bathroom"
              link="https://www.instagram.com/p/CkgkNVEIZAF/"
            />
            <ProjectCard
              src="/project2.jpg"
              text="Blue and grey bathroom"
              link="https://www.instagram.com/p/CkfYl-IgTMp/"
            />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default HomePage;
