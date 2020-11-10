import React from 'react';
import styles from './DialogItem.module.scss';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={styles.dialogItem}>
      <NavLink to={path} activeClassName={styles.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
