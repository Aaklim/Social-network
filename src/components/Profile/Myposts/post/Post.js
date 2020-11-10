import React from 'react';
import styles from './Post.module.scss';
import user from '../../../../image/user.png';

const Post = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageSection}>
        <img src={props.photo || user} alt='user' />
      </div>

      <div className={styles.messageSection}>
        <div className={styles.fullName}>{props.fullName}</div>
        <div className={styles.message}>{props.message}</div>
        <div className={styles.likes}>{props.likesCount}</div>
      </div>
    </div>
  );
};

export default Post;
