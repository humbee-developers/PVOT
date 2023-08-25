import contactImage from "../../images/contact-us.svg";
import "./contactUs.css";

const ContactUs = () => {
  return (
    <div className="contactUs-section">
      <div className="contact-image">
        <img src={contactImage} className="contactImage" alt="logo" />
        <div className="socialLinks">
          <ul>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Linkedin</a>
            </li>
          </ul>
        </div>
        <div className="wrapper">
          <div className="slider">
            <div className="slider_wrapper">
              <p>Contact Us</p>
              <p>Contact Us</p>
              <p>Contact Us</p>
            </div>
            <div className="slider_wrapper">
              <p>Contact Us</p>
              <p>Contact Us</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
