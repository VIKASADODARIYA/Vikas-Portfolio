import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import WeatherWebsite from "../../Assets/Projects/weather-website.png";
import BillSplitter from "../../Assets/Projects/BillSplitter.png";
import ResumeBuilder from "../../Assets/Projects/resume-builder.png";
import BookStore from "../../Assets/Projects/bookstore.png";
import vcsProject from "../../Assets/Projects/vcs.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BillSplitter}
              isBlog={false}
              title="Bill Splitter"
              description="Developed a web application to simplify bill splitting using HTML, CSS, PHP, andMySQL."
              ghLink="https://vikasadodariya.github.io/Web-Development/portfolio.html"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WeatherWebsite}
              isBlog={false}
              title="Weather-Website"
              description=" Build a website using HTML, CSS, JS that fetches weather data from an API and displaysthe current weather conditions."
              ghLink="https://github.com/VIKASADODARIYA/Web-Development/tree/main/Weather-Website"
              demoLink="https://weather-website-00.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ResumeBuilder}
              isBlog={false}
              title="Resume-Builder"
              description="Developed an interactive resume builder application using React.js to create andcustomize professional resumes."
              ghLink="https://github.com/VIKASADODARIYA/Resume-Builder"
              demoLink="https://resume-builder-001.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vcsProject}
              isBlog={false}
              title="Virtual Community Support"
              description="Developed a web-based platform for enhanced user interaction andstreamlined support management, featuring user onboarding, profile management, mission participation,and comprehensive administrative controls for mission and user management."
              ghLink="https://github.com/VIKASADODARIYA/TatvaSoft-Internship/tree/main/Virtual%20Community%20Support"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BookStore}
              isBlog={false}
              title="bookStore"
              description="The bookStore is an educational web app for browsing, managing, and purchasing books, featuring user-friendly interfaces, advanced search, and admin functionalities for CRUD operations."
              ghLink="https://github.com/VIKASADODARIYA/bookStore"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
