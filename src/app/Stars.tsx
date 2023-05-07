import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ReactComponent as Stars1 } from '../media/stars1.svg';

function Stars() {
  return (
    <motion.div
      className='absolute w-screen h-3/4 invisible dark:visible transition-all delay-300'
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.5], scale: [0.8, 1, 1, 0.8] }}
      transition={{
        ease: [0.17, 0.68, 0.83, 0.78],
        duration: 10,
        repeat: Infinity,
        times: [0, 0.25, 0.75, 1],
      }}
    >
      <Stars1 />
    </motion.div>
  );
}

export default Stars;