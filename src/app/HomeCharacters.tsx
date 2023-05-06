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

  // Render SVGs with map and custom interface depending on prop 
function HomeCharacters() {
  return (
    <div className='overflow-hidden w-screen h-screen'>
      <div className='w-screen absolute border border-orange-700 h-1/4'>
      <span id='title_name_text' className='inline-block border border-blue-600 text-8xl w-fit h-1/5'>
        Ivan Korostenskij
      </span>
      </div>
    <div className='flex justify-evenly bottom-0 h-4/5 w-screen border border-purple-700 mt-[320px]'>
        <motion.div
          whileHover={{
            scale: 1.0,
            translateY: -50,
            transition: { duration: 0.2 },
          }}
          className="border ml-10 mr-10 border-red-500 h-1/4 w-1/6"
        >
          <img src={Greenguy} alt="char" className='min-w-[200px] min-h-[200px] max-w-[300px]'/>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.0,
            translateY: -50,
            transition: { duration: 0.2 },
          }}
          className="border border-red-500 h-1/5 w-1/5 m-36 pt-[200px]"
        >
          <img src={Orangeguy} alt="char" className='min-w-[300px] -scale-x-100' />
        </motion.div>
        </div>
      </div>
  );
}

export default HomeCharacters;
