import React from 'react';
import Backdrop from '../../Backdrop/Backdrop';
import Drawer from '../Drawer';
import { connect } from 'react-redux';
import { getDrawerIsOpenSelector } from '../../Redux/selectors/selectors';
import { toggleDrawer } from '../../Redux/actionsCreator/actionsCreator';

const DrawerContainer = (props) => {
  return (
    <div>
      <Drawer {...props} />
      <Backdrop {...props} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    drawerIsOpen: getDrawerIsOpenSelector(state),
  };
};

export default connect(mapStateToProps, { toggleDrawer })(DrawerContainer);
