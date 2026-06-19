import React from "react";
import { Col, Row } from "react-bootstrap";

const education = [
  {
    title: "Bachelor of Computer Engineering",
    institution: "Faculty of Engineering, Cairo University",
    period: "2019 – 2024",
    details: [
      "Accumulative Grade: Very Good — GPA 3.2 / 4.0",
      "Graduation Project: Video Frame Prediction Library (VFP) — deep learning models and PyPI backend APIs.",
    ],
  },
];

const honors = [
  "First Place Award — 6th Undergraduate Engineering Mathematics Research Forum (Dec 2021)",
  "Red Hat System Administration — ITI (Feb 2022)",
  "ACM Local Programming Contests — Participant (Aug 2022)",
  "Certificate in Mobile Testing using Appium — Test Automation Platform (Sep 2022)",
];

function Education() {
  return (
  <>
    <h1 className="project-heading">
      Education & <strong className="purple">Honors</strong>
    </h1>
    <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
      <Col md={9} className="resume">
        {education.map((item) => (
          <div className="resume-item" key={item.institution}>
            <h3 className="resume-title">
              {item.title} — <span className="purple">{item.institution}</span>
            </h3>
            <p style={{ color: "#a588c0", marginBottom: "8px" }}>{item.period}</p>
            <ul>
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="resume-item">
          <h3 className="resume-title">Honors & Awards</h3>
          <ul>
            {honors.map((honor) => (
              <li key={honor}>{honor}</li>
            ))}
          </ul>
        </div>
      </Col>
    </Row>
  </>
  );
}

export default Education;
