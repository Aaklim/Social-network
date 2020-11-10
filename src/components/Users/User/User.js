import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './User.module.scss';
import Button from '../../Button/Button';
import user from '../../../image/user.png';

const User = (props) => {
  return (
    <div key={props.user.id} className={styles.user}>
      <div>
        <NavLink to={'/profile/' + props.user.id}>
          <img
            src={props.user.photos.small ? props.user.photos.small : user}
            alt='user'
            className={styles.userPhoto}
          />
        </NavLink>
      </div>
      <div>
        {props.user.followed ? (
          <Button
            onClick={() => {
              props.unfollow(props.user);
            }}
          >
            Unfollow
          </Button>
        ) : (
          <Button
            onClick={() => {
              props.follow(props.user);
            }}
          >
            Follow
          </Button>
        )}
      </div>

      <div className={styles.nameStatusSection}>
        <div className={styles.name}>{props.user.name}</div>
        <div className={styles.status}>{props.user.status}</div>
      </div>
    </div>
  );
};

export default User;
