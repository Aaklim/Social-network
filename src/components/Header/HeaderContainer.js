import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logout, toggleDrawer } from '../Redux/actionsCreator/actionsCreator';
import {
  getIsAuthSelector,
  getLoginSelector,
  getDrawerIsOpenSelector,
} from '../Redux/selectors/selectors';

export class HeaderContainer extends Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: getIsAuthSelector(state),
    login: getLoginSelector(state),
    drawerIsOpen: getDrawerIsOpenSelector(state),
  };
};

export default connect(mapStateToProps, { logout, toggleDrawer })(
  HeaderContainer
);
