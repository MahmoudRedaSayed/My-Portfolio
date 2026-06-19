import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiNodejs,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiLaravel,
  SiMysql,
  SiCsharp,
  SiPhp,
  SiCss3,
  SiHtml5,
  SiJava,
  SiRedux,
  SiCypress,
  SiDocker,
  SiKubernetes,
  SiTypescript,
  SiCodeigniter,
} from "react-icons/si";

function Techstack() {
  return (
    <>
      <h1 className="project-heading">
        Backend <strong className="purple">Skillset</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiLaravel />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiCodeigniter />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiDocker />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiKubernetes />
        </Col>
      </Row>

      <h1 className="project-heading">
        Frontend <strong className="purple">Skillset</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNextdotjs />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiRedux />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiHtml5 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiCss3 />
        </Col>
      </Row>

      <h1 className="project-heading">
        Database <strong className="purple">Skillset</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiFirebase />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql />
        </Col>
      </Row>

      <h1 className="project-heading">
        Testing <strong className="purple">Skillset</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiCypress />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <span className="tech-icon-label">Appium</span>
        </Col>
      </Row>

      <h1 className="project-heading">
        Programming languages <strong className="purple">Skillset</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <CgCPlusPlus />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTypescript />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiCsharp />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPhp />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJava />
        </Col>
      </Row>
      <p style={{ color: "white", textAlign: "center", paddingBottom: "30px" }}>
        Also experienced with{" "}
        <strong className="purple">WebRTC, Socket.IO, Verilog, and Assembly x86</strong>
      </p>
    </>
  );
}

export default Techstack;
