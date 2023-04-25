// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import Waves from "./Waves";
import HomePageText from "./HomePageText";
import Dock from "./Dock";

export function App() {
  return (
    <div>
      <HomePageText/>
      <Dock/>
      <Waves/>
    </div>
  );
}

export default App;