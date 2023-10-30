import React from "react";
import RightSlider from "./../src/components/leftImageRightSliderImage/RightSlider";
import innertrafficlight from "../src/images/inner_trafficlight.png";
import innerfood from "../src/images/inner_food.png";
import innershopping from "../src/images/inner_shopping.png";
import innerindustria from "../src/images/inner_industria.png";
import innerclock from "../src/images/inner_clock.png";
import inneroldtv from "../src/images/inner_oldtv.png";
import innerfluidmobile from "../src/images/inner_fluidmobile.png";
import "./innermultiplecards.css";

const innerMultipleCards = () => {
  return (
    <div className="common_container">
      <div className="inner_multiple_cards_parent">
        <div className="inner_multiple_cards_1">
          <div className="inner_multiple_card1 multiple_cards_custom1">
            <RightSlider
              className="xbxbx"
              title1={"Conversion Rate Optimization (CRO)"}
              title2={"Performance Analytics"}
              text1={
                "We're the mechanics of the digital world. We fine-tune your website to ensure every visitor doesn't just browse, but takes the action you desire."
              }
              text2={
                "We don't just show you data; we translate it into actions. Every campaign is a chance to outperform your last victory."
              }
            />
          </div>
          <div className="inner_multiple_card2 multiple_cards_custom1">
            <img
              className="multiple_cards_img_setting"
              src={innertrafficlight}
              alt=""
            />
          </div>
          <div className="inner_multiple_card3 multiple_cards_custom1">
            <img
              className="multiple_cards_img_setting"
              src={innerfood}
              alt=""
            />
          </div>
          <div className="inner_multiple_card4 multiple_cards_custom1">
            <img
              className="multiple_cards_img_setting"
              src={innershopping}
              alt=""
            />
          </div>
        </div>
        <div className="inner_multiple_cards_2">
          <div className="inner_multiple_card5 multiple_cards_custom2 ">
            <img
              className="multiple_cards_img_setting"
              src={innerindustria}
              alt=""
            />
          </div>
          <div className="inner_multiple_card6 multiple_cards_custom2">
            <img
              className="multiple_cards_img_setting"
              src={innerclock}
              alt=""
            />
          </div>
          <div className="inner_multiple_card7 multiple_cards_custom2">
            <img
              className="multiple_cards_img_setting"
              src={inneroldtv}
              alt=""
            />
          </div>
          <div className="inner_multiple_card8 multiple_cards_custom2">
            <img
              className="multiple_cards_img_setting"
              src={innerfluidmobile}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default innerMultipleCards;
