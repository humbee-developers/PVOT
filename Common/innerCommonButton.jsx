import React from 'react'
import innerCommon from "./../src/images/innerbuttonimage.png"
const innerCommonButton = () => {
  return (
    <div>
    <div style={{cursor:"pointer",backgroundColor:"#735b9f",width:"232px",margin:"0px 87px"}}>
    <img src={innerCommon} alt="" />
    <div  style={{fontSize:"25px",position:"absolute",bottom:"-167rem",left:"8rem"}}>Contact Now -</div>
    </div>
    </div>
  )
}

export default innerCommonButton

