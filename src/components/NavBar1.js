import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  return (
    <Navbar
      style={{ color: "black" }}
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand
          style={{
            fontFamily: "Comic Sans MS, Comic Sans, cursive",
            color: "#00ffff",
          }}
        >
          Subramanya K S
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/">
              <h2>Home</h2>
            </Nav.Link>
            <Nav.Link href="/about">
              <h2>About</h2>
            </Nav.Link>
            <Nav.Link href="/education">
              <h2>Education</h2>
            </Nav.Link>
            <Nav.Link href="/experience">
              <h2>Experience</h2>
            </Nav.Link>
            <Nav.Link href="/project">
              <h2>Project</h2>
            </Nav.Link>
            <Nav.Link href="/skills">
              <h2>Skills</h2>
            </Nav.Link>
            <Nav.Link href="/contact">
              <h2>Contact</h2>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
