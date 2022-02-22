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
                github{" "}
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/laurendeguzman/"
                target="_blank"
              >
                {" "}
                linkedIn{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </footer>
  );
}

export default Footer;
