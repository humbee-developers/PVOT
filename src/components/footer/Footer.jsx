import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import btnArrow from "../../images/btn_arrow.svg";
import crossArrow from "../../images/crossArrow.svg";
import logo from "../../images/PVOT-Design-Final-Logo-White.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className="footer">
      <Container className="container">
        <div className="logo">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="main-footer">
          <div className="main-footer-left">
            <h2 className="footer-heading-text">
              We would love to hear from you.
            </h2>
            <p className="footer-small-text">
              Feel free to reach our if you want to collaborate with us, or
              simply have a chat
            </p>
            <Button className="footer-button  ">
              <div className="btn_flex hover_btn">
                <span className="footer-button-text btn_text">
                  Become a Client
                </span>
                <span className="footer-button-text btn_text">
                  Become a Client
                </span>
              </div>
              <div className="arrow_icon">
                {/* <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#ffffff" }}
                  className="btnArrow"
                /> */}
                <img src={btnArrow} alt="btnArrow" />
              </div>
            </Button>
            <p className="footer-small-text">
              Don’t like the forms? Drop us a line via email.
            </p>
            <a className="footer-email" href="mailto:pvot@123.com">
            pvot@email.com
            </a>
          </div>
          <div className="main-footer-right">
            <nav className="footer-nav">
              <div className="footer-left-nav-details">
                <h3 className="footer-left-nav-heading">Contact us</h3>
                <ul
                  className=""
                  style={{ listStyle: "none", paddingLeft: "0" }}
                >
                  <li className="footer-left-items-list">
                    Our Email
                    <br />
                    <a  href="mailto:pvot@123.com">
                      pvot@email.com
                    </a>
                  </li>

                  <li className="footer-left-items-list">
                    Our Phone
                    <br />
                    +9100000000
                  </li>
                  <li className="footer-left-items-list">
                    San Francisco, CA 2 Embarcadero Center, 8 floor, 94111
                  </li>
                </ul>
              </div>

              <div className="footer-left-nav-details special">
                <h3 className="footer-left-nav-heading">Follow us</h3>
                <ul
                  className=""
                  style={{ listStyle: "none", paddingLeft: "0" }}
                >
                  <li className="footer-left-items-list">
                    <a className="footer-left-nav-link" href="">
                      Dribble
                      <span className="footer-left-nav-link-icons">
                        {/* <FontAwesomeIcon
                          icon={faArrowUp}
                          style={{ color: "#8b8b8b" }}
                        /> */}
                        <img src={crossArrow} alt="btnArrow" />
                      </span>
                    </a>
                  </li>
                  <li className="footer-left-items-list">
                    <a className="footer-left-nav-link" href="">
                      Linkedin
                      <span className="footer-left-nav-link-icons">
                        {/* <FontAwesomeIcon
                          icon={faArrowUp}
                          style={{ color: "#8b8b8b" }}
                        /> */}
                        <img src={crossArrow} alt="btnArrow" />
                      </span>
                    </a>
                  </li>
                  <li className="footer-left-items-list">
                    <a className="footer-left-nav-link" href="">
                      Clutch
                      <span className="footer-left-nav-link-icons">
                        {/* <FontAwesomeIcon
                          icon={faArrowUp}
                          style={{ color: "#8b8b8b" }}
                        /> */}
                        <img src={crossArrow} alt="btnArrow" />
                      </span>
                    </a>
                  </li>
                  <li className="footer-left-items-list">
                    <a className="footer-left-nav-link" href="">
                      Instagram
                      <span className="footer-left-nav-link-icons">
                        {/* <FontAwesomeIcon
                          icon={faArrowUp}
                          style={{ color: "#8b8b8b" }}
                        /> */}
                        <img src={crossArrow} alt="btnArrow" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-left-nav-details">
                <ul
                  className=""
                  style={{ listStyle: "none", paddingLeft: "0" }}
                >
                  <li
                    className="footer-left-items-list"
                    style={{ marginTop: "0" }}
                  >
                    <a className="footer-left-nav-link" href="">
                      Services
                    </a>
                  </li>
                  <li className="footer-left-items-list">
                    <a className="footer-left-nav-link" href="">
                      Development
                    </a>
                  </li>
                  <li className="footer-left-items-list">
                    <a className="footer-left-nav-link" href="">
                      Blog
                    </a>
                  </li>
                  <li className="footer-left-items-list">
                    <a className="footer-left-nav-link" href="">
                      Reviews
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="footer-end" style={{ marginTop: "80px" }}>
          <p className="footer-end-text">
            © PVOT 2023. All rights reserved
            <span className="footer-end-span"></span>
            <a className="footer-end-link" href="">
              Privacy Policy
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
