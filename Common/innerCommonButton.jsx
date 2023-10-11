import React from 'react'
import innerCommon from "./../src/images/innerbuttonimage.png"
import "./innerbutton.css"
const innerCommonButton = () => {
  return (
    <div>
    <div className='common_button_outer'>
    <img src={innerCommon} alt="" />
    <a href='/contact-us'  style={{fontSize:"25px",position:"absolute",bottom:"-167rem",left:"8rem"}}>Contact Now -</a>
    </div>
    </div>
  )
}

export default innerCommonButton

