import { MotionConfig, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ReactComponent as CloudsDuoOne } from '../media/clouds/clouds-duo-1.svg';
import { ReactComponent as CloudsMogus } from '../media/clouds/clouds-mogus.svg';
import { ReactComponent as CloudsMultiOne } from '../media/clouds/clouds-multi-1.svg';
import { ReactComponent as CloudsPlaneOne } from '../media/clouds/clouds-plane-1.svg';
import { ReactComponent as CloudsTrioOne } from '../media/clouds/clouds-trio-1.svg';
import { ReactComponent as CloudsTrioTwo } from '../media/clouds/clouds-trio-2.svg';

interface CloudsProps {
  duration: number;
  cloudType: string;
  opacity: number;
  scale: number;
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

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function Clouds(props: CloudsProps) {

  const randomYPosition = getRandomInt(-50, window.innerHeight * 0.2)
  
  const [cloudStartXPosition, setCloudStartXPosition] = useState(() =>
    getRandomInt(-50, 0));
  const [cloudStartYPosition, setcloudStartYPosition] = useState(randomYPosition);

  function setCloudStartYPosition () {
    const randomYPosition = getRandomInt(-50, window.innerHeight * 0.2);
    setcloudStartYPosition(randomYPosition);
  }

  useEffect(() => {
    const handleResize = () => {
      getRandomInt(-30, 0);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute w-screen h-32 scale-[3.6]">
      <MotionConfig>
      <motion.div
        style={{ width: 150, x: cloudStartXPosition, y: cloudStartYPosition, opacity: props.opacity }}
        animate={{ x: `80vw`}}
        transition={{
          ease: 'linear',
          delay: getRandomInt(0, 10),
          duration: props.duration,
          repeat: Infinity,
        }}
        onTouchEnd={() => {
          console.log('animation complete');
        }
        }
        onAnimationIterationCapture={() => {
          console.log('animation complete');
          setCloudStartYPosition();
          setCloudStartXPosition(-350);
        }}
    
      >
        {cloudTypes[props.cloudType]}
      </motion.div>
      </MotionConfig>
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
      duration: getRandomInt(15, 70),
      cloudType: randomCloudType,
      opacity: getRandomInt(5, 10) / 10,
      scale: Math.random() * (3.8 - 2.5) + 2.5,
    };

    CloudElements.push(
      <Clouds
        duration={randomCloudAttributes.duration}
        cloudType={randomCloudAttributes.cloudType}
        opacity={randomCloudAttributes.opacity}
        scale={randomCloudAttributes.scale}
      />
    );
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {CloudElements}
    </>
  )
}



export default CloudGenerator;