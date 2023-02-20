import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";

import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiLaravel,
  SiFlask,
  SiExpress,
  SiMysql,
  SiCsharp,
  SiPhp,
  SiCss3,
  SiHtml5,
  SiJava,
  SiReduxsaga,
  SiCypress
} from "react-icons/si";

function Techstack() {
  return (
    <>
    <h1 className="project-heading">
          Backend <strong className="purple">Skillset </strong>
    </h1>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
      </Col>
    </Row>

    <h1 className="project-heading">
          Frontend <strong className="purple">Skillset </strong>
    </h1>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReduxsaga />
      </Col>
    </Row>
    <h1 className="project-heading">
          Database <strong className="purple">Skillset </strong>
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
          Testing <strong className="purple">Skillset </strong>
    </h1>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCypress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Appium
      </Col>
    </Row>
    <h1 className="project-heading">
          Programming languages <strong className="purple">Skillset </strong>
    </h1>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiCsharp/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiPhp/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiCss3/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiHtml5/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiJava/>
      </Col>
    </Row>
    <p>and some other languages like <strong className="purple">Verilog , Assembly and C  </strong></p>

    </>
  );
}

export default Techstack;
