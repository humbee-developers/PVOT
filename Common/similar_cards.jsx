import React from 'react'
import RightSlider from ".././src/components/leftImageRightSliderImage/RightSlider";
import innerglobal from "../src/images/inner_global.png";
import innerglobal2 from "../src/images/inner_global2.png";
import "./similar_card.css"
const similar_cards = () => {
  return (
      <div className="common_container">
      <div className="similar_cards_outer">
      <div className="similar_cards1">
        <img className="similar_card_img" src={innerglobal} alt="" />
      </div>
      <div className="similar_cards2">
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
      <div className="similar_cards3">
        <img className="similar_card_img" src={innerglobal2} alt="" />
      </div>
    </div>
      </div>
  )
}

export default similar_cards