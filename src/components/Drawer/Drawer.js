import React from 'react';
import styles from './Drawer.module.scss';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

const Drawer = (props) => {
  return (
    <div className={cn(styles.drawer, { [styles.isOpen]: props.drawerIsOpen })}>
      <nav
        className={styles.nav}
        onClick={() => props.toggleDrawer(!props.drawerIsOpen)}
      >
        <div className={styles.item}>
          <NavLink to='/profile' activeClassName={styles.active}>
            <span>Profile</span>
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to='/dialogs' activeClassName={styles.active}>
            <span>Dialogs</span>
          </NavLink>
        </div>

        <div className={styles.item}>
          <NavLink to='/settings' activeClassName={styles.active}>
            <span>Settings</span>
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to='/users' activeClassName={styles.active}>
            <span>Users</span>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Drawer;
