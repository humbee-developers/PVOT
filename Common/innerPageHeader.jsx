import React from 'react'

const innerPageHeader = () => {
  return (
    <div>
    <img className="internal_page1_image1" src={imx} alt="" />
      <div className="internal_page1">
        <div className="internal_page1_inner">
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="internal_page1_inner1">
          <div className="internal_heading">OVERVIEW</div>
          <div className="internal_text ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            voluptas nisi libero tenetur error quis maiores maxime
            exercitationem voluptatem nesciunt, voluptatibus, et, laboriosam
            perferendis quam dicta accusamus aliquam hic possimus asperiores
            dolorem deserunt optio. Velit.
          </div>
        </div>
        <div className="internal_page1_inner2">
          <div className="internal_heading">SERVICES</div>
          <div className="internal_text">
            {" "}
            Brand Identity, Brand Messaging, Website Design, Illustration,
            Packaging Design
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default innerPageHeader