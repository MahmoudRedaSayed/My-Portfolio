import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";

import ProjectCard from "./ProjectCards";
import Particle from "../../helpers/Particle";
import Mumble from "../../Assets/projects/Mumble.png";
import WhatsApp from "../../Assets/projects/WhatsApp.png";
import MeetStrangers from "../../Assets/projects/MeetStrangers.png";
import AlgoPhobia from "../../Assets/projects/AlgoPhobia.png";
import PizzaStore from "../../Assets/projects/Pizza.png";
import ProShopping from "../../Assets/projects/ProShopping.png";
import FitClub from "../../Assets/projects/FitClub.png";
import Resturante from "../../Assets/projects/restourant.png";
import Kaspse from "../../Assets/projects/Kapse.png";
import Travel from "../../Assets/projects/Travel.png";
import Adventure from "../../Assets/projects/Adventure.png";
import HelloThere from "../../Assets/projects/HelloThere.png";
import ToDo from "../../Assets/projects/Todo.png";
import Blogger from "../../Assets/projects/Blogger.png";
import FootballScore from "../../Assets/projects/FootballScore.png";

const featuredProjects = [
  {
    imgPath: MeetStrangers,
    title: "Meet Strangers",
    description:
      "WebRTC video calling application with real-time chat via WebRTC data channels. Built to explore scalable peer-to-peer communication.",
    ghLink: "https://github.com/MahmoudRedaSayed/Meet-Strangers",
  },
  {
    imgPath: WhatsApp,
    title: "WhatsApp Clone",
    description:
      "Real-time messaging application with WhatsApp-like UI and core messaging features using React and Firebase.",
    ghLink: "https://github.com/MahmoudRedaSayed/WhatsApp-Clone",
  },
  {
    imgPath:
      "https://opengraph.githubassets.com/1/MahmoudRedaSayed/Hackr.io",
    title: "Hackr.io",
    description:
      "Learning resources sharing platform built with Next.js, Node.js, MongoDB, and AWS.",
    ghLink: "https://github.com/MahmoudRedaSayed/Hackr.io",
  },
  {
    imgPath:
      "https://raw.githubusercontent.com/MahmoudRedaSayed/Search-Engine/main/Pics/suggest.PNG",
    title: "K3M Search Engine",
    description:
      "Crawler-based search engine similar to Google, Yahoo, and Bing — implemented with Java and MySQL.",
    ghLink: "https://github.com/MahmoudRedaSayed/Search-Engine",
  },
  {
    imgPath: Mumble,
    title: "Mumble",
    description:
      "Video meeting application with chat, screen sharing, and video recording capabilities.",
    ghLink: "https://github.com/MahmoudRedaSayed/Mumble",
  },
  {
    imgPath:
      "https://opengraph.githubassets.com/1/MahmoudRedaSayed/RedditX-Testing",
    title: "RedditX Testing",
    description:
      "Automated testing suite for web and mobile applications using Cypress and Appium.",
    ghLink: "https://github.com/MahmoudRedaSayed/RedditX-Testing",
  },
];

const moreProjects = [
  {
    imgPath: AlgoPhobia,
    title: "AlgoPhobia Hotel",
    description:
      "Hotel booking system to browse rooms and book accommodations across locations.",
    ghLink: "https://github.com/MahmoudRedaSayed/Hotel-Booking-System",
  },
  {
    imgPath: PizzaStore,
    title: "Pizza Store",
    description: "Pizza store website to showcase products and place orders online.",
    ghLink: "https://github.com/MahmoudRedaSayed/Pizza-Delivery",
  },
  {
    imgPath: ProShopping,
    title: "ProShopping",
    description: "E-commerce platform for browsing and purchasing electronic devices.",
    ghLink: "https://github.com/MahmoudRedaSayed/Pre-Shopping",
  },
  {
    imgPath: FitClub,
    title: "Fit Club",
    description:
      "Gym website showcasing trainer reviews and trainee transformation stories.",
    ghLink: "https://github.com/MahmoudRedaSayed/Fit-Club",
  },
  {
    imgPath: Resturante,
    title: "Resturante",
    description: "Restaurant website built from scratch without frameworks.",
    ghLink: "https://github.com/MahmoudRedaSayed/Resturante-Project",
  },
  {
    imgPath: Kaspse,
    title: "Kaspse",
    description: "Company portfolio website built from scratch without frameworks.",
    ghLink: "https://github.com/MahmoudRedaSayed/Kaspse",
  },
  {
    imgPath: Travel,
    title: "Travel Website",
    description: "Travel website built with SCSS.",
    ghLink: "https://github.com/MahmoudRedaSayed/Travel-Website",
  },
  {
    imgPath: Adventure,
    title: "Adventure Website",
    description: "Hotel portfolio-style adventure website.",
    ghLink: "https://github.com/MahmoudRedaSayed/Hotel-project",
  },
  {
    imgPath: ToDo,
    title: "Todo List",
    description: "Task management app for organizing daily missions.",
    ghLink: "https://github.com/MahmoudRedaSayed/TodoList",
  },
  {
    imgPath: HelloThere,
    title: "Hello There",
    description:
      "Company portfolio with about, services, contact, and works sections.",
    ghLink: "https://github.com/MahmoudRedaSayed/Hello-There",
  },
  {
    imgPath: Blogger,
    title: "Blogger",
    description: "Blog platform to submit posts and view post authors.",
    ghLink: "https://github.com/MahmoudRedaSayed/Node-Blogger",
  },
  {
    imgPath: FootballScore,
    title: "Football Score",
    description:
      "Football scores website for upcoming, live, and completed match results.",
    ghLink: "https://github.com/MahmoudRedaSayed/Football-Score",
  },
];

function ProjectGrid({ projects }) {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      {projects.map((project) => (
        <Col md={4} className="project-card" key={project.title}>
          <ProjectCard
            imgPath={project.imgPath}
            isBlog={false}
            title={project.title}
            description={project.description}
            ghLink={project.ghLink}
          />
        </Col>
      ))}
    </Row>
  );
}

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Highlights from my recent backend, full-stack, and real-time systems work.
        </p>
        <ProjectGrid projects={featuredProjects} />

        <h1 className="project-heading">
          More <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Additional web projects across e-commerce, booking, and frontend development.
        </p>
        <ProjectGrid projects={moreProjects} />
      </Container>

      <Container style={{ paddingTop: "30px", paddingBottom: "40px" }}>
        <h1 className="project-heading">
          Explore <strong className="purple">GitHub</strong>
        </h1>
        <p style={{ color: "white" }}>
          Browse all repositories and open-source contributions on my GitHub profile.
        </p>
        <Button
          variant="primary"
          href="https://github.com/MahmoudRedaSayed"
          target="_blank"
        >
          <BsGithub /> &nbsp; MahmoudRedaSayed
        </Button>
      </Container>
    </Container>
  );
}

export default Projects;
