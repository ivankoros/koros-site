// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import Waves from "./Waves";
import HomePageText from "./HomePageText";
import Dock from "./Dock";
import SocialButtons from './nav_bar/SocialButtons';
import CloudGenerator from './Clouds';

export function App() {
  return (
    <div className='bg-[#A8DADC] w-screen h-screen dark:bg-[#141115] transition-all delay-150'>
      <CloudGenerator cloud_amount={8}/>
      <SocialButtons/>
      <HomePageText/>
      <Dock/>
      <Waves/>

    </div>
  );
}

export default App;