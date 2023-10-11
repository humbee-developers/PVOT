import React from 'react'
import canbottle from "./../src/images/canbottle.png";
import mangocup from "./../src/images/mangocup.png";
import "./threecards.css"
const threeCards = () => {
  return (
    <div>
    <div className='threecards_outer'>
    <div className='threecards_one'>
    <img src={canbottle} alt="" />
    </div>
    <div className='threecards_two'>
    <img src={mangocup} alt="" />
    </div>
    <div className='threecards_three'>
    <img src={mangocup} alt="" />
    </div>
    
    </div>
    
    </div>
  )
}

export default threeCards