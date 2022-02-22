import React from "react";
import coverImage from "../../assets/cover/linkedin profile copy.jpeg";
import { Image } from "react-bootstrap";

function About() {
  return (
    <section className="my-3">
      <h1 id="about">Lauren de Guzman</h1>
      <h2> Full Stack Web Developer</h2>
      <div className="image-box">
        <Image className="cover-image" src={coverImage} />
      </div>
      <div className="my-2">
        <p>
          Full-stack web developer with experience in HTML, CSS, JavaScript,
          Git, Web API's, OOP, MERN stack [ MongoDB, Express.js, React, Node.js]
          MySQL, NoSQL, MVC, etc... With an ever-growing pool of knowledge and
          an MA degree in Strategic Communications and Public Relations, I am a
          hardworking versatile professional with expertise in supporting
          various content development, communications, and PR projects. Using
          various client management methodologies, I have developed an in-depth
          understanding of digital campaign planning, campaign strategy, and
          digital marketing management. As a versatile Masters graduate with
          commercial experience, I work well with multidisciplinary teams from
          both marketing and non-marketing backgrounds. I have also learned to
          lead and contribute to marketing projects, including working with
          dedicated project teams, always ensuring we deliver each client
          project on time and to specification. I am highly skilled at shaping
          marketing vision, defining digital marketing strategies, and
          delivering outstanding results in line with project plan and
          mission-critical objectives. While I thrive on maximizing success
          through creativity, innovation, and PR/comms best practice, I am very
          personable and easily facilitate clear communication with various
          teams. As a fluent English and Spanish speaker, I believe that this is
          a critical aspect to delivering the high service levels demanded by a
          discerning international client base. My robust track record of
          academic achievement displays my ongoing commitment to international
          marketing.
        </p>
      </div>
    </section>
  );
}

export default About;
