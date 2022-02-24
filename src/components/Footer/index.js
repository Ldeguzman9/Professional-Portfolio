import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Collapse>
            <Nav id="footer-nav">
              <Nav.Link href="https://github.com/ldeguzman9" target="_blank">
                {" "}
                Github{" "}
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/laurendeguzman/"
                target="_blank"
              >
                {" "}
                LinkedIn{" "}
              </Nav.Link>
              <Nav.Link
                href="https://stackoverflow.com/users/18295152/lauren-de-guzman"
                target="_blank"
              >
                {" "}
                StackOverflow{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </footer>
  );
}

export default Footer;
