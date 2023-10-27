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
            title1={props.title1}
            title2={props.title2}
            title3={props.title3}
            title4={props.title4}
            title5={props.title5}
            title6={props.title6}
            text1={props.text1}
            text2={props.text2}
            text3={props.text3}
            text4={props.text4}
            text5={props.text5}
            text6={props.text6}
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
