// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import Waves from "./Waves";
import HomePageText from "./HomePageText";
import Dock from "./Dock";
import SocialButtons from './SocialButtons';


export function App() {
  return (
    <div>
      <SocialButtons/>
      <HomePageText/>
      <Dock/>
      <Waves/>
    </div>
  );
}

export default App;