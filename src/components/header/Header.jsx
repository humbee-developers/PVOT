import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
// import NewNav from "../headers/index";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../images/PVOT-Design-Final-Logo-White.png";
const Header = () => {
  const [active, setActive] = useState(false);
  function handleToggle() {
    setActive(!active);
  }
  return (
    <div>
      <div className="hero" id="hro">
        <Navbar expand="lg" className="">
          <Container>
            <Link className="brand navbar-brand" to="/PVOT">
              <img src={logo} alt="logo" className="logo" />
            </Link>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={handleToggle}
              className="ham_btn"
            >
              <div className="three col">
                <div
                  className={`hamburger ${active ? "active" : ""}`}
                  id="hamburger-1"
                >
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </div>
              </div>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="" style={{ marginLeft: "auto" }}>
                <div className="desktop_menu">
                  <Link to="/PVOT/services" className="nav-link hover_btn">
                    <span className="btn_text">Services</span>
                    <span className="btn_text hover">Services</span>
                  </Link>

                  <Link to="/PVOT/knowUs" className="nav-link hover_btn">
                    <span className="btn_text">Know Us</span>
                    <span className="btn_text hover">Know Us</span>
                  </Link>

                  <Link to="/PVOT/portfolio" className="nav-link hover_btn">
                    <span className="btn_text">Portfolio</span>
                    <span className="btn_text hover">Portfolio</span>
                  </Link>

                  {/* <Link to="/PVOT/blog" className="nav-link hover_btn">
                    <span className="btn_text">Media</span>
                    <span className="btn_text hover">Media</span>
                  </Link>

                  <Link to="/PVOT/career" className="nav-link hover_btn">
                    <span className="btn_text">Career</span>
                    <span className="btn_text hover">Career</span>
                  </Link> */}

                  <Link to="/PVOT/contact-us" className="nav-link hover_btn">
                    <span className="btn_text"> Contact Us</span>
                    <span className="btn_text hover"> Contact Us</span>
                  </Link>
                </div>

                <div className="mobile_menu">
                  <Navbar.Toggle onClick={handleToggle}>
                    <Link to="/PVOT" className="nav-link hover_btn">
                      <span className="btn_text">Home</span>
                    </Link>
                  </Navbar.Toggle>
                  <Navbar.Toggle onClick={handleToggle}>
                    <Link to="/PVOT/services" className="nav-link hover_btn">
                      <span className="btn_text">Services</span>
                    </Link>
                  </Navbar.Toggle>
                  <Navbar.Toggle onClick={handleToggle}>
                    <Link to="/PVOT/knowUs" className="nav-link hover_btn">
                      <span className="btn_text">Know Us</span>
                    </Link>
                  </Navbar.Toggle>
                  <Navbar.Toggle onClick={handleToggle}>
                    <Link to="/PVOT/portfolio" className="nav-link hover_btn">
                      <span className="btn_text">Portfolio</span>
                    </Link>
                  </Navbar.Toggle>
                  {/* <Navbar.Toggle onClick={handleToggle}>
                    <Link to="/PVOT/blog" className="nav-link hover_btn">
                      <span className="btn_text">Media</span>
                    </Link>
                  </Navbar.Toggle>
                  <Navbar.Toggle onClick={handleToggle}>
                    <Link to="/PVOT/career" className="nav-link hover_btn">
                      <span className="btn_text">Career</span>
                    </Link>
                  </Navbar.Toggle> */}
                  <Navbar.Toggle onClick={handleToggle}>
                    <Link to="/PVOT/contact-us" className="nav-link hover_btn">
                      <span className="btn_text"> Contact Us</span>
                    </Link>
                  </Navbar.Toggle>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* <NewNav /> */}
      </div>
    </div>
  );
};

export default Header;
