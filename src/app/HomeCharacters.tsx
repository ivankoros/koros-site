import Greenguy from '../media/greenguy.svg';
import { motion } from 'framer-motion';

function HomeCharacters() {
  return (
    <motion.div
      whileHover={{
        scale: 1.0,
        translateY: -50,
        transition: { duration: 0.3 },
      }}
      className="border border-red-500 w-60 ml-20 pt-20"
    >
      <img src={Greenguy} alt="greenguy" />
    </motion.div>
  );
}

export default HomeCharacters;
