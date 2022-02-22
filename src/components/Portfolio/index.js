import React, { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
//import logo from "../../assets/images/github.svg";

function Portfolio() {
  const [work] = useState([
    {
      name: "Stockable",
      id: "Stockable-Img-Element",
      description: "Frontend Stockmarket Project",
      link: "https://limichael97.github.io/Stockable/",
      github: "https://github.com/Ldeguzman9/Stockable",
    },
    {
      name: "Tech Blog",
      id: "TechBlog-Img-Element",
      description: "Node.js, SQL, Hanldebars, Express, Bcrypt, Dotenv",
      link: "https://intense-island-28784.herokuapp.com/",
      github: "https://github.com/Ldeguzman9/Tech-blog",
    },
    {
      name: "Quick Quack Quiz",
      id: "QQQ-Img-Element",
      description: "JS, HTML, CSS, Server Side APIs",
      link: "https://quick-quack-quiz.herokuapp.com/",
      github: "https://github.com/Ldeguzman9/Quick-Quack-Quiz",
    },
    {
      name: "Note Taker",
      id: "NoteTaker-Img-Element",
      description: "JS, HTML, CSS, Server Side APIs",
      link: "https://agile-tor-89756.herokuapp.com/",
      github: "https://github.com/Ldeguzman9/note-taker",
    },
    {
      name: "Workday Scheduler",
      id: "WorkDay-Img-Element",
      description: "HTRML, Bootstrap, JQuery",
      link: "https://ldeguzman9.github.io/work-day-calendar/",
      github: "https://github.com/Ldeguzman9/work-day-calendar",
    },
    {
      name: "Code Quiz",
      id: "CodeQuiz-Img-Element",
      description: "HTML, Bootstrap, JS",
      link: "https://ldeguzman9.github.io/code-quiz/",
      github: "https://github.com/Ldeguzman9/code-quiz",
    },
    {
      name: "Run Buddy",
      id: "RunBuddy-Img-Element",
      description: "HTML, CSS",
      link: "https://ldeguzman9.github.io/run-buddy/",
      github: "https://github.com/Ldeguzman9/run-buddy",
    },
  ]);

  return (
    <div>
      <h2 className="my-work">Examples of my Work</h2>
      <section className="my-3">
        <div className="portfolio-div">
          {work.map((example, i) => (
            <Card key={example.name} id={example.id} className="WorkCard">
              <Col className="img-col">
                <div className="img-class"></div>
              </Col>
              <Card.Body>
                <Col>
                  <Card.Text>{example.description}</Card.Text>
                </Col>
                <div>
                  <Button variant="primary" href={example.link}>
                    {example.name}
                  </Button>
                  <a href={example.github} className="github-link">
                    {/* <img src={logo} alt="github link" /> */}
                  </a>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
