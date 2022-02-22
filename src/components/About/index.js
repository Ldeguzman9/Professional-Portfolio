import React from "react";
import coverImage from "../../assets/cover/Portfolio Banner.png";
import { Image } from "react-bootstrap";

function About() {
  return (
    <section className="my-3">
      {/* <h1 id="about">Lauren de Guzman</h1> */}

      <div className="image-box">
        <Image className="cover-image" src={coverImage} />
      </div>
      {/* <h2> Full Stack Web Developer</h2> */}
      <div className="my-2">
        <p>
          Full-stack web developer with experience in HTML, CSS, JavaScript,
          Git, Web API's, OOP, MERN stack [ MongoDB, Express.js, React, Node.js]
          MySQL, NoSQL, MVC, etc...
        </p>
      </div>
    </section>
  );
}

export default About;
