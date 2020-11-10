import React from 'react';
import styles from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';

const Navbar = React.memo(() => {
  return (
    <nav className={styles.nav}>
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
  );
});
export default Navbar;
