import React from "react";
import { Col, Row } from "react-bootstrap";

const experiences = [
  {
    title: "Senior Backend Developer",
    company: "PaySky",
    period: "Oct 2025 – Present",
    details: [
      "Developing scalable backend services for fintech platforms using microservices architecture.",
      "Improving system reliability, performance, and security across production services.",
    ],
  },
  {
    title: "Senior Backend Developer (Part-Time)",
    company: "Proupto",
    period: "Jun 2025 – Feb 2026",
    details: [
      "Built and optimized backend APIs with a focus on database performance.",
      "Collaborated with frontend and mobile teams on end-to-end product delivery.",
    ],
  },
  {
    title: "Backend Developer",
    company: "My Cash",
    period: "Sep 2024 – Oct 2025",
    details: [
      "Developed backend APIs and financial system features using Laravel and MySQL.",
    ],
  },
  {
    title: "Backend Developer",
    company: "Apes Solutions",
    period: "Feb 2024 – Aug 2024",
    details: [
      "Developed APIs for mobile and web applications including RadZoom, Phantom, and Adwity.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Afaq (Saudi Arabia)",
    period: "Aug 2023 – Jun 2024",
    details: [
      "Built backend APIs with Laravel and frontend interfaces with React.js.",
      "Contributed to Smart Schools System and CSR platforms.",
    ],
  },
  {
    title: "Freelance Full Stack Developer",
    company: "Self-employed",
    period: "Oct 2022 – Present",
    details: [
      "Delivered accounting platforms, booking systems, and educational platforms such as Sahm4edu.",
    ],
  },
  {
    title: "Testing Intern",
    company: "Codescalers",
    period: "Jul 2023 – Sep 2023",
    details: [
      "Performed automated testing for web and mobile applications using Selenium tools.",
    ],
  },
];

function Experience() {
  return (
  <>
    <h1 className="project-heading">
      Professional <strong className="purple">Experience</strong>
    </h1>
    <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
      <Col md={9} className="resume">
        {experiences.map((job) => (
          <div className="resume-item" key={`${job.company}-${job.period}`}>
            <h3 className="resume-title">
              {job.title} — <span className="purple">{job.company}</span>
            </h3>
            <p style={{ color: "#a588c0", marginBottom: "8px" }}>{job.period}</p>
            <ul>
              {job.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </Col>
    </Row>
  </>
  );
}

export default Experience;
