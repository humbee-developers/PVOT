import RightSlider from "./../src/components/leftImageRightSliderImage/RightSlider";
import innertrafficlight from "../src/images/inner_trafficlight.png";
import innerfood from "../src/images/inner_food.png";
import innershopping from "../src/images/inner_shopping.png";
import "./fourCards.css";

const FourCards = () => {
  return (
    <div className="common_container">
      <div className="four_cards">
        <div className="four_cards_wrapper">
          <div className="four_cards_wrapper_inner">
            <RightSlider
              className="xbxbx"
              title1={"Content Management System"}
              title2={"Interactive Design"}
              text1={
                "Do you want control? We hand you the reins. With our CMS solutions, you can update content effortlessly, keeping your website fresh and your audience engaged."
              }
              text2={
                "We don't just entertain; we educate, engage, and excite. Interactive elements like quizzes and tools can turn casual visitors into loyal fans."
              }
            />
          </div>
          <div className="four_cards_image">
            <img className="" src={innertrafficlight} alt="" />
          </div>
          <div className="four_cards_image">
            <img className="" src={innerfood} alt="" />
          </div>
          <div className="four_cards_image">
            <img className="" src={innershopping} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourCards;
