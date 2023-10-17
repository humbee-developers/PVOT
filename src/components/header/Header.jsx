
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import home from "../../images/home-icon.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import FramerMagnetic from "../../../Common/magnetic";
import logo from "../../images/PVOT-Design-Final-Logo-White.png"
import NewNav from "../headers/index";
const Header = () => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };
  if (active) {
    document.body.classList.add("mobile_menu_open");
  } else {
    document.body.classList.remove("mobile_menu_open");
  }

  return (
    <div>
      <div className="hero" id="hro">
        {/* <Navbar expand="lg" className="">
          <Container>
            <Link className="brand navbar-brand" to="/">
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
                
                  <Link
                    to="/"
                    className="nav-link nav_icon_link"
                    style={{ backgroundColor: "white" }}
                  >
                  <FramerMagnetic>
                    <img src={home} alt="logo" />
                    </FramerMagnetic>
                  </Link>
                  

                 
                  <Link to="/services" className="nav-link hover_btn">
                  <FramerMagnetic>
                   
                    <span className="btn_text">Services</span>
                    </FramerMagnetic>
                  </Link>
                 
                 
                  <Link to="/knowUs" className="nav-link hover_btn">
                  <FramerMagnetic>
                    <span className="btn_text">Know Us</span>
                    </FramerMagnetic>
                  </Link>
                  
                  
                  <Link to="/portfolio" className="nav-link hover_btn">
                  <FramerMagnetic>
                    <span className="btn_text">Portfolio</span>
                    </FramerMagnetic>
                  </Link>
                  

                  
                  <Link to="/blog" className="nav-link hover_btn">
                  <FramerMagnetic>
                    <span className="btn_text">Media</span>
                    </FramerMagnetic>
                  </Link>
                 

                
                  <Link to="/career" className="nav-link hover_btn">
                  <FramerMagnetic>
                    <span className="btn_text">Career</span>
                    </FramerMagnetic>
                  </Link>
                 
                  
                  <Link to="/contact-us" className="nav-link hover_btn">
                  <FramerMagnetic>
                    <span className="btn_text"> Contact Us</span>
                    </FramerMagnetic>
                  </Link>
                 
                </div>

                <div className="mobile_menu">
                  <Navbar.Toggle onClick={handleToggle}>
                    <Link to="/" className="nav-link hover_btn">
                      <span className="btn_text">Home</span>
                      <span className="btn_text">Home</span>
                    </Link>
                  </Navbar.Toggle>
                  <Navbar.Toggle onClick={handleToggle}>
                    <Link to="/services" className="nav-link hover_btn">
                      <span className="btn_text">Services</span>
                      <span className="btn_text">Services</span>
                    </Link>
                  </Navbar.Toggle>
                  <Navbar.Toggle onClick={handleToggle}>
                    <Link to="/knowUs" className="nav-link hover_btn">
                      <span className="btn_text">Know Us</span>
                      <span className="btn_text">Know Us</span>
                    </Link>
                  </Navbar.Toggle>
                  <Navbar.Toggle onClick={handleToggle}>
                    <Link to="/portfolio" className="nav-link hover_btn">
                      <span className="btn_text">Portfolio</span>
                      <span className="btn_text">Portfolio</span>
                    </Link>
                  </Navbar.Toggle>
                  <Navbar.Toggle onClick={handleToggle}>
                    <Link to="/blog" className="nav-link hover_btn">
                      <span className="btn_text">Media</span>
                      <span className="btn_text">Media</span>
                    </Link>
                  </Navbar.Toggle>
                  <Navbar.Toggle onClick={handleToggle}>
                    <Link to="/career" className="nav-link hover_btn">
                      <span className="btn_text">Career</span>
                      <span className="btn_text">Career</span>
                    </Link>
                  </Navbar.Toggle>
                  <Navbar.Toggle onClick={handleToggle}>
                    <Link to="/contact-us" className="nav-link hover_btn">
                      <span className="btn_text"> Contact Us</span>
                      <span className="btn_text"> Contact Us</span>
                    </Link>
                  </Navbar.Toggle>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> */}
        <NewNav />
      </div>
    </div>
  );
};

export default Header;
