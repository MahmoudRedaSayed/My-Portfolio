import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mahmoud Reda </span>
            from <span className="purple"> Cairo, Egypt.</span>
            <br />I am a junior at cairo university faculty of engineering Department computer 
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "just start is very hard"{" "}
          </p>
          <footer className="blockquote-footer">Reda</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
