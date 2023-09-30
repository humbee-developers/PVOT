import { motion } from "framer-motion";
import img17 from "../../images/image17.png";
import "./heroSection.css"
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 200 },
  visible: { opacity: 1, y:20 , transition: { duration: 2, delay: 1 } },
};
const textVariants2 = {
  hidden: { opacity: 0, y: 200 },
  visible: { opacity: 1, y:20 , transition: { duration: 2, delay: 2 } },
};

const TextAnimation = () => {
  return (
   <div style={{backgroundColor:"black"}}>
   <motion.div
   className="x"
   variants={containerVariants}
   initial="hidden"
   animate="visible"
 >
 <motion.img className="imag" src={img17} variants={textVariants2}/>
   <motion.div className="text  one" variants={textVariants}>
     PV
   </motion.div>

   <motion.div className="text  two" variants={textVariants}>
     OT
   </motion.div>
 </motion.div>
   </div>
  );
};

export default TextAnimation;
