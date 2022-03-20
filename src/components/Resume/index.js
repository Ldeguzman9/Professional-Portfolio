import React from "react";

function Resume() {
  return (
    <section className="my-3">
      <h2>Resume</h2>
      <p className="center">
        Download my resume{" "}
        <a href="https://drive.google.com/file/d/1tNPIzUxIB95Bz3UKaz0xydnePieLuFO2/view?usp=sharing">
          here
        </a>
      </p>
      <section id="technical-proficiencies" class="main-section">
        <h3>Technical Proficiencies</h3>
        <ul className=" main-section">
          HTML, CSS, Javascript, React, SQL, NoSQL, MongoDB, Git, Bootstrap,
          Web-based APIs, Node.js, Sequelize, Express.js, Object Relational
          Mapping, Model View Controllers, Progressive Web Applications
        </ul>
      </section>
      <section id="certifications" class="main-section">
        <h3>Certifications</h3>
        <p>
          <ul>
            <li>
              <strong>UC Davis Coding Bootcamp</strong>
              <br />
              University of California, Davis
              <br />
              September 2021 - March 2022
              <br />
            </li>
            <br />
            <li>
              <strong>SheCodes Basics</strong>
              <br />
              SheCodes Workshops
              <br />
              September 2021
              <br />
              Credential ID:{" "}
              <a
                href="https://www.shecodes.io/certificates/a676d48e142b8d63c7435cca5a9f9500"
                target="_blank"
              >
                a676d48e142b8d63c7435cca5a9f9500
              </a>
            </li>
          </ul>
        </p>
      </section>

      <section id="academic-background" class="main-section">
        <h3>Academic background</h3>
        <p>
          <ul class="university">
            <li>
              <strong>UC Davis Continuing and Professional Education</strong>
              <br />
              Full Stack Web Development <br />
              September 2021 - March 2022
              <br />
            </li>
            {/* <br />
            <li>
              <strong>Universidad de La Laguna</strong>
              <br />
              Spanish Language
              <br />
              September 2018 - June 2019
              <br />
              Intermediate Spanish Certificate (A1 -B2)
            </li> */}
            <br />
            <li>
              <strong>DEREE - The American College of Greece</strong>
              <br />
              M.A. Strategic Communications and Public Relations
              <br />
              September 2014 - December 2015
              <br />
            </li>
            <br />
            <li>
              <strong>University of Gothenburg</strong>
              <br />
              Viking and Medieval Scandinavian History
              <br />
              January 2014 - May 2014
              <br />
              Semester Exchange
            </li>
            <br />
            <li>
              <strong>California State University - Sacramento</strong>
              <br />
              B.A. Governement - Internation Relations
              <br />
              September 2012 - May 2014
              <br />
            </li>
            <br />
            <li>
              <strong>American River College</strong>
              <br />
              A.A. Language Studies - Spanish
              <br />
              Fall 2020
              <br />
            </li>
          </ul>
        </p>
      </section>
    </section>
  );
}

export default Resume;
