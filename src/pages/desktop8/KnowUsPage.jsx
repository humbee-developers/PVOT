import React from 'react'
import HeroHeading from "../Desktop6/HeroHeading/HeroHeading";
import RectangleCard from "../../../Common/RectangleCard";
import rectangleBg from "../../images/rectangle-image.png"
import Achievements from '../../components/achievements/Achievements';
import "./Knowus.css"
const KnowUsPage = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
    <HeroHeading  bigHeading={"KNOW US"}/>

    <div className='know-us-divider'>
    <div className='know-us-title'>WHAT DO WE DO?</div>
    <div className='know-us-text'>
    <div className='know-us-text-inner'>PVOT  is a full-service creative agency that collaborates with game changers to amplify their stories and impact through thoughtful and strategic design. From advancing human rights to creating more sustainable cities and everything in between, we work to mobilize people around causes that spur positive change.</div>
    </div>
    </div>
    <div className='know-us-image-outer' style={{marginTop:"19px"}}>
    <img className='know-us-image' src={rectangleBg} alt="rectangle-bg" style={{width:"100%"}} />
    </div>
    <div style={{backgroundColor:"white"}}>
    <Achievements/>
    </div>
  <div className='clients-outer'>
  <div className='clients-title'>OUR CLIENTS</div>
  <div className='clients-text'>We’re fortunate to have worked with some amazing clients.</div>
  <img src='' alt="" />
  </div>
    <RectangleCard />
    </div>
  )
}

export default KnowUsPage