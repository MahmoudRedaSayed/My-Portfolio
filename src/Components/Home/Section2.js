import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Section2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a <b className="purple">Senior Backend Developer</b> based in
              Cairo, Egypt, focused on building scalable backend systems,
              RESTful APIs, and fintech platforms that demand high performance,
              reliability, and security.
              <br />
              <br />
              Currently at <b className="purple">PaySky</b>, I work on
              microservices architecture and backend services for fintech
              products. I also contribute as a{" "}
              <b className="purple">Teaching Assistant</b> at Cairo University.
              <br />
              <br />
              My core stack includes{" "}
              <i>
                <b className="purple">
                  Laravel, Node.js, CodeIgniter, MySQL, and MongoDB
                </b>
              </i>
              , with hands-on experience in{" "}
              <i>
                <b className="purple">Docker, Kubernetes, and CI/CD</b>
              </i>
              . On the frontend side, I work with{" "}
              <i>
                <b className="purple">React.js and Next.js</b>
              </i>
              , which helps me collaborate effectively across the full stack.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src="https://avatars.githubusercontent.com/u/76118788?s=400&u=938e356c365da338b7dd49071d6a77fd767fdf93&v=4"
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MahmoudRedaSayed"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mahmoud-reda-sayed-7b52a7232/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:mahmoudredasayed997@gmail.com"
                  className="icon-colour home-social-icons"
                >
                  <HiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Section2;
