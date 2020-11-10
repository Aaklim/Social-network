import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import MenuToggle from '../MenuToggle/MenuToggle';
import styles from './Header.module.scss';
import SN from '../../image/SN.png';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <img src={SN} alt='icon' />
      </div>
      <MenuToggle
        drawerIsOpen={props.drawerIsOpen}
        toggleDrawer={props.toggleDrawer}
      />
      <div className={styles.loginWrapper}>
        {props.isAuth ? (
          <div className={styles.loginSection}>
            <div className={styles.login}>{props.login}</div>
            <Button onClick={props.logout}>Logout</Button>
          </div>
        ) : (
          <NavLink to='/login'>Login</NavLink>
        )}
      </div>
    </header>
  );
};
export default Header;
