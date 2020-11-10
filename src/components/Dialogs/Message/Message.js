import React from 'react';
import styles from './Message.module.scss';

const Message = (props) => {
  console.log('Message props', props);
  return (
    <div className={styles.message}>
      <span className={styles.userName}>{props.userName}:</span> {props.message}
    </div>
  );
};

export default Message;
