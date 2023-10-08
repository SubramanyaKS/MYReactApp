import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar
      style={{ color: "black" }}
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="shadow-lg p-3 mb-5 bg-dark "
    >
      <Container>
        <Navbar.Brand
          style={{
            fontFamily: "Comic Sans MS, Comic Sans, cursive",
            color: "#00ff0d",
          }}
        >
          &lt;$ubramanya K $/&gt;
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Link className="navlink" to="/">
              <h2>&lt; Home /&gt;</h2>
            </Link>
            <Link className="navlink" to="/about">
              <h2>&lt; About /&gt;</h2>
            </Link>
            <Link className="navlink" to="/education">
              <h2>&lt; Education /&gt;</h2>
            </Link>
            <Link className="navlink" to="/experience">
              <h2>&lt; Experience /&gt;</h2>
            </Link>
            <Link className="navlink" to="/project">
              <h2>&lt; Project /&gt;</h2>
            </Link>
            <Link className="navlink" to="/skills">
              <h2>&lt; Skills /&gt;</h2>
            </Link>
            <Link className="navlink" to="/contact">
              <h2>&lt; Contact /&gt;</h2>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
