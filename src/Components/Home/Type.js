import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Backend Developer",
          "Backend Engineer @ PaySky",
          "Full Stack Developer",
          "Teaching Assistant @ Cairo University",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
