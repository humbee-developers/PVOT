import React from 'react'
import RightSlider from ".././src/components/leftImageRightSliderImage/RightSlider";
import innertempo from ".././src/images/inner_tempo.png";
import "./thirtyseventy.css"
const ThirtySeventy = () => {
  return (
      <div className="common_container">
      <div className="innercloud_sec_outer">
      <div className="innercloud_sec_inner_one">
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
      <div className="innercloud_sec_inner_two">
        <img className="innercloud_sec_inner_img" src={innertempo} alt="" />
      </div>
    </div>
      
      </div>
  )
}

export default ThirtySeventy