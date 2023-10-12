import React from 'react'
import innerCommon from "./../src/images/innerbuttonimage.png"
import "./innerbutton.css"
const innerCommonButton = () => {
  return (
    <div className='common_container'>
    <div style={{marginTop:"2rem"}}>
    <div className='common_button_outer'>
    <img src={innerCommon} alt="" />
    <a href='/contact-us'  style={{fontSize:"25px",position:"absolute",top:"24%",left:"40px",transfrom:"translateY(50%)"}}>Contact Now -</a>
    </div>
    </div>
    </div>
  )
}

export default innerCommonButton

