import "./contactContent.css";
const ContactContent = () => {
  return (
    <div className="contact_content">
      
        <div className="contact_content_left">
          <div className="contact_content_left_sec">
            <div className="contact_content_left_heading">
              want to say hello?
            </div>
            <div className="contact_content_left_text">
              We know you want to. You should just go ahead and write us.
            </div>
            <div className="contact_content_left_mail hover_btn">
              <a  href="mailto:pvot@123.com">
                <span className="btn_text">pvot@123.com</span>
                <span className="btn_text">pvot@123.com</span>
              </a>
            </div>
          </div>
        </div>
        
      
    </div>
  );
};
export default ContactContent;
