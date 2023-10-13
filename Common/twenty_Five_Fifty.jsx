import React from "react";
import RightSlider from "../src/components/leftImageRightSliderImage/RightSlider";
import dress_iphone from "../src/images/inner_dress_iphone.png";
import fifty_percent from "../src/images/inner_fifty_per_img.png";
import "./twentyfivefifty.css";
const twenty_Five_Fifty = () => {
  return (
    <div className="common_container">
      <div className="twenty_five_fifty_outer">

        <div className="twenty_five_fifty_one">
          <div className="twenty_five_fifty_one_slider">
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
          <div className="twenty_five_fifty_one_image_outer">
            <img className="twenty_five_fifty_one_image" src={dress_iphone} alt="" />
          </div>
        </div>


        <div className="twenty_five_fifty_two">
          <img  className="twenty_five_fifty_two_image"  src={fifty_percent} alt="" />
        </div>
      </div>
    </div>
  );
};

export default twenty_Five_Fifty;
