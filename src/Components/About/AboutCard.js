import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mahmoud Reda Sayed</span>
            from <span className="purple">Cairo, Egypt</span>.
            <br />
            I am a <span className="purple">Senior Backend Developer</span> at
            PaySky and a <span className="purple">Teaching Assistant</span> at
            Cairo University.
            <br />
            I graduated from Cairo University, Faculty of Engineering, with a
            Bachelor's in Computer Engineering (GPA 3.2/4.0).
            <br />
            I specialize in backend architecture, API design, database
            optimization, and building reliable systems for fintech, education,
            and enterprise platforms.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Clean code scales better than clever code."
          </p>
          <footer className="blockquote-footer">Mahmoud Reda</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
