import React from "react";
import RectangleCard from "../../../Common/RectangleCard";
import CoCard from"../../../Common/CoCard";
import HeroHeading from "../Desktop6/HeroHeading/HeroHeading";

const ServicesPage = () => {
  return (
    <div className="" style={{ backgroundColor: "black" }}>
      <HeroHeading title="Services" />
      <CoCard title="Website Design" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum praesentium nam molestias voluptates laborum, iste hic sit alias fuga velit incidunt quae itaque ea voluptas soluta blanditiis illum cumque."/>
      <CoCard title="Social Media Marketing" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum praesentium nam molestias voluptates laborum, iste hic sit alias fuga velit incidunt quae itaque ea voluptas soluta blanditiis illum cumque."/>
      <CoCard title="Search engine optimization" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum praesentium nam molestias voluptates laborum, iste hic sit alias fuga velit incidunt quae itaque ea voluptas soluta blanditiis illum cumque."/>
      <CoCard title="Advertising & Marketing" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum praesentium nam molestias voluptates laborum, iste hic sit alias fuga velit incidunt quae itaque ea voluptas soluta blanditiis illum cumque."/>
      <RectangleCard title="Website Design" />
    </div>
  );
};

export default ServicesPage;
