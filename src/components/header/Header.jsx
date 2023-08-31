import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/Mask.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
const Header = () => {
  return (
    <div>
      <div className="hero" id="hro">
        <Navbar expand="lg" className="">
          <Container>
            <Navbar.Brand className="brand" href="/">
              PVOT
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="" style={{ marginLeft: "auto" }}>
                <Nav.Link href="/" style={{ backgroundColor: "white" }}>
                  <img src={logo} alt="" />
                </Nav.Link>
                <Nav.Link href="#link">Know Us</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                <Nav.Link href="/blog">Media</Nav.Link>
                <Nav.Link href="/career">Career</Nav.Link>
                <Nav.Link href="/contact-us">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
