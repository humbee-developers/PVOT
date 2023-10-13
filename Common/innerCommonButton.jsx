import React from 'react'
import innerCommon from "./../src/images/innerbuttonimage.png"
import "./innerbutton.css"
const innerCommonButton = () => {
  return (
    <div className='common_container'>
    
    <div className='common_button_outer'>
    <img src={innerCommon} alt="" />
    <a className='common_button_link' href='/contact-us'>Contact Now -</a>
    </div>
    
    </div>
  )
}

export default innerCommonButton

