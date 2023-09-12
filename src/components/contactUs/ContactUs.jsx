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
              <a href="#" className="hover_btn">
                <span className="btn_text">Instagram</span>
                <span className="btn_text">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover_btn">
                <span className="btn_text">Twitter</span>
                <span className="btn_text">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover_btn">
                <span className="btn_text">Linkedin</span>
                <span className="btn_text">Linkedin</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="contactUs-section_wrapper">
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
