import React from 'react';
import styles from './app.module.css';

function Waves() {
  return (
    <div className={styles.ocean}>
      <div className={styles.wave}></div>
      <div className={styles.wave}></div>
    </div>
  );
}

export default Waves;
