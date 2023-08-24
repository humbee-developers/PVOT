import contactImage from "../../images/contact-us.svg";
import "./contactUs.css";

const ContactUs = () => {
  return (
    <div>
      <div className="contact-image">
        <img src={contactImage} className="App-logo" alt="logo" />
      </div>
      <div className="marquee">
        <div className="marquee--inner">
          <span>
            <h2>
              Contact Us - Contact Us - Contact Us - Contact Us - Contact Us -
              Contact Us - Contact Us - Contact Us - Contact Us - Contact Us
            </h2>
          </span>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
