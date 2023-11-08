import React from 'react'
import innerCommon from "./../src/images/innerbuttonimage.png"
import { Link } from "react-router-dom"; 
import "./innerbutton.css"
const innerCommonButton = () => {
  return (
    <div className='common_container'>
    
    <div className='common_button_outer'>
    {/* <img className='common_button_image' src={innerCommon} alt="" /> */}
    {/* <Link className='common_button_link' to='/contact-us'>Contact Now -</Link> */}
    <Link to='/contact-us' class="btn-flip" data-back="Contact Us" data-front="Contact Us"></Link>
    </div>
    
    </div>
  )
}

export default innerCommonButton

