import { motion } from 'framer-motion';
import RectangleCard from "../../../Common/RectangleCard";
import CoCard from"../../../Common/CoCard";
import HeroHeading from "../Desktop6/HeroHeading/HeroHeading";
import Mask from '../../images/Mask group.png';

const ServicesPage = () => {
  return (
    <div>
    <div className="" style={{ backgroundColor: "black" }}>
      <HeroHeading bigHeading="Services" />
      <CoCard title="Website Design" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum praesentium nam molestias voluptates laborum, iste hic sit alias fuga velit incidunt quae itaque ea voluptas soluta blanditiis illum cumque."/>
      <CoCard title="Social Media Marketing" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum praesentium nam molestias voluptates laborum, iste hic sit alias fuga velit incidunt quae itaque ea voluptas soluta blanditiis illum cumque."/>
      <CoCard title="Search engine optimization" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum praesentium nam molestias voluptates laborum, iste hic sit alias fuga velit incidunt quae itaque ea voluptas soluta blanditiis illum cumque."/>
      <CoCard title="Advertising & Marketing" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum praesentium nam molestias voluptates laborum, iste hic sit alias fuga velit incidunt quae itaque ea voluptas soluta blanditiis illum cumque."/>
      <RectangleCard title="Website Design" />
    </div>
    <div style={{ width: '100%', overflow: 'hidden',backgroundColor:"black" }}>
      <motion.div
        initial={{ x: '100%' }} // Initial position (off-screen to the right)
        animate={{ x: '-100%' }} // Target position (off-screen to the left)
        transition={{
          duration: 26, // Adjust the duration of the animation
          ease: 'linear', // Use linear easing for a continuous motion
          repeat: Infinity, // Repeat the animation indefinitely
        }}
        style={{
          width: 'auto',
          height: '200px', // Adjust the height of the container as needed
          backgroundColor: 'black', // Optional background color
          display:"flex"
        }}
      >
        <img
          src={Mask} // Replace with your image source
          alt="Moving Image"
          style={{ width: 'auto', height: '100%' }}
        />
        
      </motion.div>
    </div>
    </div>
    
  );
};

export default ServicesPage;
