import Greenguy from '../media/greenguy.svg';
import Orangeguy from '../media/orangeguy.svg';
import { motion } from 'framer-motion';

export interface HomeCharactersProps {
  guy: 'green' | 'orange' | string;
}

const characterMap: Record<string, string> = {
  green: Greenguy,
  orange: Orangeguy,
};

function HomeCharacters(props: HomeCharactersProps) {
  const svgToRender = characterMap[props.guy] || Greenguy;

  return (
    <motion.div
      whileHover={{
        scale: 1.0,
        translateY: -50,
        transition: { duration: 0.2 },
      }}
      className="border border-red-500 w-60 ml-20 pt-20"
    >
      <img src={svgToRender} alt="char" />
    </motion.div>
  );
}

export default HomeCharacters;
