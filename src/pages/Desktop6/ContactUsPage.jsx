import ContactForm from "../../components/contactUs/contactForm/ContactForm";
import ContactContent from "./contactContent/ContactContent";
import ContactLeftHeading from "./contactLeftHeading/ContactLeftHeading";
import contact_us_image from "../../images/contact_us_banner_image.png";
import "./contactUsPage.css";

const ContactUsPage = () => {
  return (
    <section className="contact_us_page">
      <div className="contact_us_page_container">
        <div className="contact_us_image_outer">
          <img className="contact_us_image" src={contact_us_image} alt="" />
        </div>
        <div className="common_container">
          <div className="form_wrapper_section">
            <div className="form_wrapper_left">
              <ContactLeftHeading />
              <ContactContent />
            </div>
            <div className="form_wrapper_right">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactUsPage;
