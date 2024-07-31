import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vikas Adodariya </span>
            from <span className="purple"> Junagadh, Gujarat, India.</span>
            <br />
            I am currently studying in A. D. Patel Institute of Technology which is constituent college of CVM University.
            <br />
            I am currently pursuing a Bachelor of Engineering degree in Computer Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies & WebSeries
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
          </ul>

          <p style={{ color: "rgb(61, 80, 222)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Vikas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
