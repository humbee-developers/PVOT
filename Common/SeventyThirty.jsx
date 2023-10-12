import React from 'react'
import "./seventythirty.css"
const SeventyThirty = (props) => {
  return (
      <div className='seventy_thirty'>
      <div className='seventy_thirty_one'>
      <img className='seventy_img' src={props.seventy_img} alt="" />
      </div>
      <div className='seventy_thirty_two'>
      <img className='seventy_img2' src={props.thirty_img} alt="" />
      </div>
      </div>
  )
}

export default SeventyThirty