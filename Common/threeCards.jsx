import RightSlider from "./../src/components/leftImageRightSliderImage/RightSlider";
import "./threecards.css";
const threeCards = (props) => {
  return (
    <div className="common_container">
      <div className="threecards_outer">
        <div className="threecards_one">
          <img src={props.cane_image} alt="" />
        </div>
        <div className="threecards_two">
          <RightSlider
            className="xbxbx"
            title1={"Brand Identity"}
            title2={"Brand Identity"}
            text1={
              "Creating almost a personification of Jolie, this beautiful wordmark feels feminine and clean. The varied weights and character angles of the custom wordmark combine to create a strong and timeless wordmark."
            }
            text2={
              "Creating almost a personification of Jolie, this beautiful wordmark feels feminine and clean. The varied weights and character angles of the custom wordmark combine to create a strong and timeless wordmark."
            }
          />
        </div>
        <div className="threecards_three">
          <img src={props.mango_cup} alt="" />
        </div>
      </div>
    </div>
  );
};

export default threeCards;
