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
          &lt;Subramanya K S/&gt;
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/">
              <h2>&lt; Home &gt;</h2>
            </Nav.Link>
            <Nav.Link href="/about">
              <h2>&lt; About &gt;</h2>
            </Nav.Link>
            <Nav.Link href="/education">
              <h2>&lt; Education &gt;</h2>
            </Nav.Link>
            <Nav.Link href="/experience">
              <h2>&lt; Experience &gt;</h2>
            </Nav.Link>
            <Nav.Link href="/project">
              <h2>&lt; Project &gt;</h2>
            </Nav.Link>
            <Nav.Link href="/skills">
              <h2>&lt; Skills &gt;</h2>
            </Nav.Link>
            <Nav.Link href="/contact">
              <h2>&lt; Contact &gt;</h2>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
