import "./headingAndContent.css";
import { PropTypes } from "prop-types";

const HeadingAndContent = ({ title, text }) => {
  return (
    <div className=" client-outer_wrapper c-clients-bg-sticky sticky_logo_section">
      <div className="clients-title ">{title}</div>
      <div className="clients-text">{text}</div>
    </div>
  );
};

export default HeadingAndContent;

HeadingAndContent.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
