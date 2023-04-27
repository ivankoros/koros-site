import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {ReactComponent as CloudsDuoOne} from '../media/clouds/clouds-duo-1.svg';

interface CloudsProps {
    duration: number;
}

function Clouds(props: CloudsProps) {

    const [cloudStartXPosition, setCloudStartXPosition] = useState(-350);
    const [cloudStartYPosition, setcloudStartYPosition] = useState(0);

    useEffect(() => {
        const animationOver = () => {
            const randomYPosition = Math.floor(Math.random() * 100);
            setcloudStartYPosition(randomYPosition);
        }
        const interval = setInterval(animationOver, props.duration * 1000);
        return () => {
            clearInterval(interval);
        }
    }, [props.duration]);


    useEffect(() => {
        const handleResize = () => {
            setCloudStartXPosition(-350);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

  return (
    <div className="absolute w-screen h-32">
      <motion.div
        style={{ width: 150, x: cloudStartXPosition, y: cloudStartYPosition }}
      animate={{ x: '100vw' }}
      transition={{ ease: "linear", duration: props.duration, repeat: Infinity }}>
            <CloudsDuoOne/>
      </motion.div>
    </div>
  );
}

export default Clouds;
