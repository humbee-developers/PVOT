import React from 'react'
import "./innerpage2.css"
const innerPage2 = (props) => {
  return (
    <div>
    <div className="internal_4th_img_outer">
    <div className='internal_4th_header_outer'>
    <div className='internal_4th_header_text'>{props.internalHeader}</div>
    </div>
        <img className="internal_4th_img" src={props.img8} alt="" />
        <div className="internal_4th_img_text_outer">
          <div className="internal_4th_img_text"> {props.innertext}</div>
        </div>
      </div>
    </div>
  )
}

export default innerPage2