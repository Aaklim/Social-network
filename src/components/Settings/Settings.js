import React from 'react';
import styles from './Settings.module.scss';
import progress from '../../image/progress.jpg';

const Settings = () => {
  return (
    <div className={styles.settings}>
      <img src={progress} alt='desing in progress' />
    </div>
  );
};

export default Settings;
