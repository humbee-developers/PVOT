import ContactForm from "../../components/contactUs/ContactForm";
import HeroHeading from "./HeroHeading/HeroHeading";
import ContactContent from "./contactContent/ContactContent";
import ContactLeftHeading from "./contactLeftHeading/ContactLeftHeading";
import "./contactUsPage.css";

const ContactUsPage = () => {
  return (
    <section className="contact_us_page">
      <div className="contact_us_page_container">
        <div className="contact_us_page_inner">
          <HeroHeading />
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
