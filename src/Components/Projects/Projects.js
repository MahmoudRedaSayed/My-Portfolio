import React from "react";
import { Container, Row, Col,Button } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";

import ProjectCard from "./ProjectCards";
import Particle from "../../helpers/Particle";
import Mumble from "../../Assets/projects/Mumble.png";
import WhatsApp from "../../Assets/projects/WhatsApp.png";
import MeetStrangers from "../../Assets/projects/MeetStrangers.png"
import AlgoPhobia from "../../Assets/projects/AlgoPhobia.png"
import PizzaStore from "../../Assets/projects/Pizza.png";
import ProShopping from "../../Assets/projects/ProShopping.png";
// import K3M from "../../Assets/Projects/K3m.png";
import FitClub from "../../Assets/projects/FitClub.png";
import Resturante from "../../Assets/projects/restourant.png";
import Kaspse from "../../Assets/projects/Kapse.png";

import Travel from "../../Assets/projects/Travel.png";
import Adventure from "../../Assets/projects/Adventure.png";
import HelloThere from "../../Assets/projects/HelloThere.png";
import ToDo from "../../Assets/projects/Todo.png";
import Blogger from "../../Assets/projects/Blogger.png";
import FootballScore from "../../Assets/projects/FootballScore.png";

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
              imgPath={WhatsApp}
              isBlog={false}
              title="WhatsApp"
              description="Clone whatsapp with the same ui of the whatsapp and the same features"
              ghLink="https://github.com/MahmoudRedaSayed/WhatsApp-Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mumble}
              isBlog={false}
              title="Mumble"
              description="Mumble is a video meet application that allow the users do their meetings or video chats on it. It has chat,share screen and video recording. I implemented it 2 months ago. you can review the project from its link below"
              ghLink="https://github.com/MahmoudRedaSayed/Mumble"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MeetStrangers}
              isBlog={false}
              title="Meet Strangers"
              description="A basic Video Calling App implemented using WebRTC Protocol. The current version uses Google's STUN server. The chat capabilities are implemented using WebRTC data channel The purpose of building this project was to better understand the WebRTC Communication protocol and how to write a scalable WebRTC based application"
              ghLink="https://github.com/MahmoudRedaSayed/Meet-Strangers"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AlgoPhobia}
              isBlog={false}
              title="AlgoPhobia Hotel"
              description="it is hotel booking system you can browse the rooms and choose any room in any where to book it."
              ghLink="https://github.com/MahmoudRedaSayed/Hotel-Booking-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PizzaStore}
              isBlog={false}
              title="Pizza Store"
              description="it is pizza store to show the new pizzas and make orders via website."
              ghLink="https://github.com/MahmoudRedaSayed/Pizza-Delivery"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ProShopping}
              isBlog={false}
              title="ProShopping"
              description="a basic E-commerce to buy electronic devices."
              ghLink="https://github.com/MahmoudRedaSayed/Pre-Shopping"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/MahmoudRedaSayed/Search-Engine/main/Pics/suggest.PNG"
              isBlog={false}
              title="K3M"
              description="Search K3M is a search engine similar to Google, Yahoo, and Bing.."
              ghLink="https://github.com/MahmoudRedaSayed/Search-Engine"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FitClub}
              isBlog={false}
              title="Fit Club"
              description="this project is made by react framework
              this is a Gym website to make the users show the reviews of the trainers and the transformations of the trainees"
              ghLink="https://github.com/MahmoudRedaSayed/Fit-Club"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Resturante}
              isBlog={false}
              title="Resturante"
              description="it is a Resturante project them from scratch without any framwork"
              ghLink="https://github.com/MahmoudRedaSayed/Resturante-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Kaspse}
              isBlog={false}
              title="Kaspse"
              description="it is a company portfolio project them from scratch without any framwork"
              ghLink="https://github.com/MahmoudRedaSayed/Kaspse"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Travel}
              isBlog={false}
              title="Travel Website"
              description="this is a Travel Website using Scss"
              ghLink="https://github.com/MahmoudRedaSayed/Travel-Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Adventure}
              isBlog={false}
              title="Adventure website"
              description="this is a Adventure Website looks like a hotel portfolio"
              ghLink="https://github.com/MahmoudRedaSayed/Hotel-project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToDo}
              isBlog={false}
              title="Todo List"
              description="this is a App to make a list of the missions."
              ghLink="https://github.com/MahmoudRedaSayed/TodoList"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HelloThere}
              isBlog={false}
              title="Hello There"
              description="this is a Portfolio to a company which contain a about  and services and contact and works sections ."
              ghLink="https://github.com/MahmoudRedaSayed/Hello-There"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blogger}
              isBlog={false}
              title="Blogger"
              description="this is a Blogger you can submit and view the owner of the post."
              ghLink="https://github.com/MahmoudRedaSayed/Node-Blogger"
            />
          </Col>        
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FootballScore}
              isBlog={false}
              title="Football Score"
              description="this is a Football score website to know the coming matches and current and the result of the match."
              ghLink="https://github.com/MahmoudRedaSayed/Football-Score"
            />
          </Col>

          </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
          My Collage's <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          visit my github account <Button variant="primary" href={"https://github.com/MahmoudRedaSayed"} target="_blank">
          <BsGithub /> &nbsp;
          Reda
        </Button>
        </p>
        </Container>
    </Container>
  );
}

export default Projects;
