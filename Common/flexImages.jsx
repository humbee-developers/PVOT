import React from 'react'
import "./fleximages.css"
const flexImages = (props) => {
  return (
     <div className='flex_image'>
     <div className='common_container'>
     <div className="internal_5th_img_outer">
     <div className="internal_5th_1">
       <img className="internal_5th_img " src={props.image1} alt="" />
       <div className="internal_5th_img_text">{props.text1}
       </div>
     </div>
     <div className="internal_5th_1">
       <img className="internal_5th_img" src={props.image2} alt="" />
       <div className="internal_5th_img_text">{props.text2}
       </div>
     </div>
   </div>
     </div>
     </div>
  )
}

export default flexImages