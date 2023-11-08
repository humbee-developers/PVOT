import { Link } from "react-router-dom";
import "./innerbutton.css";
const innerCommonButton = () => {
  return (
    <div className="common_container">
      <div className="common_button_outer">
        <Link
          to="/pvot/contact-us"
          class="btn-flip"
          data-back="Contact Us"
          data-front="Contact Us"
        ></Link>
      </div>
    </div>
  );
};

export default innerCommonButton;
