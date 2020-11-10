import React from 'react';
import styles from './Backdrop.module.scss';
import cn from 'classnames';

const Backdrop = (props) => {
  return (
    <div
      className={cn({ [styles.backdrop]: props.drawerIsOpen })}
      onClick={() => props.toggleDrawer(!props.drawerIsOpen)}
    ></div>
  );
};

export default Backdrop;
