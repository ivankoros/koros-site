import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ReactComponent as CloudsDuoOne } from '../media/clouds/clouds-duo-1.svg';
import { ReactComponent as CloudsMogus } from '../media/clouds/clouds-mogus.svg';
import { ReactComponent as CloudsMultiOne } from '../media/clouds/clouds-multi-1.svg';
import { ReactComponent as CloudsPlaneOne } from '../media/clouds/clouds-plane-1.svg';
import { ReactComponent as CloudsTrioOne } from '../media/clouds/clouds-trio-1.svg';
import { ReactComponent as CloudsTrioTwo } from '../media/clouds/clouds-trio-2.svg';

interface CloudsProps {
  duration: number;
  cloudFrequency: number;
  cloudType: string;
  opacity: number;
}

interface CloudTypes {
  [key: string]: JSX.Element;
}

const cloudTypes: CloudTypes = {
  duo: <CloudsDuoOne />,
  mogus: <CloudsMogus />,
  multi: <CloudsMultiOne />,
  plane: <CloudsPlaneOne />,
  trio: <CloudsTrioOne />,
  trio2: <CloudsTrioTwo />,
};

function Clouds(props: CloudsProps) {
  const [cloudStartXPosition, setCloudStartXPosition] = useState(-350);
  const [cloudStartYPosition, setcloudStartYPosition] = useState(0);

  useEffect(() => {
    const animationOver = () => {
      const randomYPosition = Math.floor(Math.random() * 100);
      setcloudStartYPosition(randomYPosition);
    };
    const interval = setInterval(animationOver, props.duration * 1000);
    return () => {
      clearInterval(interval);
    };
  }, [props.duration]);

  useEffect(() => {
    const handleResize = () => {
      setCloudStartXPosition(-350);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute w-screen h-32">
      <motion.div
        style={{ width: 150, x: cloudStartXPosition, y: cloudStartYPosition, opacity: props.opacity }}
        animate={{ x: `calc(100vw - ${cloudStartXPosition}px - 150px)` }}
        transition={{
          ease: 'linear',
          duration: props.duration,
          repeat: Infinity,
        }}
      >
        {cloudTypes[props.cloudType]}
      </motion.div>
    </div>
  );
}

interface CloudGeneratorProps {
  cloud_amount: number;
}

function CloudGenerator(props: CloudGeneratorProps) {
  const allCloudTypes = ['duo', 'mogus', 'multi', 'plane', 'trio', 'trio2'];
  const CloudElements = [];

  for (let i = 0; i < props.cloud_amount; i++) {
    const randomCloudType =
      allCloudTypes[Math.floor(Math.random() * allCloudTypes.length)];

    const randomCloudAttributes = {
      duration: Math.floor(Math.random() * (10 - 5) + 5),
      cloudFrequency: Math.floor(Math.random() * (10 - 1) + 1),
      cloudType: randomCloudType,
      opacity: Math.floor(Math.random() * (100 - 50) + 50) / 100,
    };

    CloudElements.push(
      <Clouds
        key={i}
        duration={randomCloudAttributes.duration}
        cloudFrequency={randomCloudAttributes.cloudFrequency}
        cloudType={randomCloudAttributes.cloudType}
        opacity={randomCloudAttributes.opacity}
      />
    );
  }

  return CloudElements;
}



export default CloudGenerator;