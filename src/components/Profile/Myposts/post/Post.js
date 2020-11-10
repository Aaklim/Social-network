import React from 'react';
import styles from './Post.module.scss';

const Post = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageSection}>
        <img
          src={
            props.photo ||
            'https://social-network.samuraijs.com/activecontent/images/users/11926/user-small.jpg?v=11'
          }
          alt='user'
        />
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
