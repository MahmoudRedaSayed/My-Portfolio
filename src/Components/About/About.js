import React from "react";
import { Container, Row, Col,Carousel } from "react-bootstrap";
import Particle from "../../helpers/Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import MyPics1 from "../../Assets/mypics/MyPics1.JPG";
import MyPics2 from "../../Assets/mypics/MyPics2.JPG";
import MyPics3 from "../../Assets/mypics/MyPics3.JPG";
import MyPics4 from "../../Assets/mypics/MyPics4.JPG";
import MyPics5 from "../../Assets/mypics/MyPics5.JPG";
import MyPics6 from "../../Assets/mypics/MyPics6.JPG";
import MyPics7 from "../../Assets/mypics/MyPics7.JPG";
import MyPics8 from "../../Assets/mypics/MyPics8.JPG";
import MyPics9 from "../../Assets/mypics/MyPics9.JPG";
import MyPics10 from "../../Assets/mypics/MyPics10.JPG";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }} >
        <Carousel style={{maxHeight:"500px",maxWidth:"900px"}} >
      <Carousel.Item style={{ justifyContent: "center", padding: "10px" }} >
        <img
          className="d-block w-100"
          src={MyPics1}
          alt="First slide"
          style={{maxHeight:"500px",maxWidth:"900px",borderRadius:"35px"}}
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MyPics2}
          alt="Second slide"
          style={{maxHeight:"500px",maxWidth:"900px",borderRadius:"35px"}}
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MyPics3}
          alt="Third slide"
          style={{maxHeight:"500px",maxWidth:"900px",borderRadius:"35px"}}
        />

      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MyPics4}
          alt="Third slide"
          style={{maxHeight:"500px",maxWidth:"900px",borderRadius:"35px"}}
        />

      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MyPics5}
          alt="Third slide"
          style={{maxHeight:"500px",maxWidth:"900px",borderRadius:"35px"}}
        />

      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MyPics6}
          alt="Third slide"
          style={{maxHeight:"500px",maxWidth:"900px",borderRadius:"35px"}}
        />

      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MyPics7}
          alt="Third slide"
          style={{maxHeight:"500px",maxWidth:"900px",borderRadius:"35px"}}
        />

      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MyPics8}
          alt="Third slide"
          style={{maxHeight:"500px",maxWidth:"900px",borderRadius:"35px"}}
        />

      
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={MyPics9}
          alt="Third slide"
          style={{maxHeight:"500px",maxWidth:"900px",borderRadius:"35px"}}
        />

      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={MyPics10}
          alt="Third slide"
          style={{maxHeight:"500px",maxWidth:"900px",borderRadius:"35px"}}
        />

      
      </Carousel.Item>
    </Carousel>
        </Row>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
