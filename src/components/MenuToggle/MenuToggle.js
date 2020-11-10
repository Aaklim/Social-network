import React from 'react';
import styles from './MenuToggle.module.scss';
import cn from 'classnames';

const MenuToggle = (props) => {
  let isOpen = props.drawerIsOpen;
  return (
    <i
      className={cn(
        styles.menuToggle,
        { 'fas fa-bars fa-4x': !isOpen },
        {
          [styles.isOpen]: isOpen,
        }
      )}
      onClick={() => props.toggleDrawer(!props.drawerIsOpen)}
    />
  );
};

export default MenuToggle;
