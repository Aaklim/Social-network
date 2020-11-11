import React, { Component } from 'react';

import { Route, withRouter, Switch } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styles from './App.module.scss';

import Navbar from './components/Navbar/Navbar';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { initializeApp } from './components/Redux/actionsCreator/actionsCreator';
import Loader from './components/Loader/Loader';
import withSuspense from './components/HOC/withSuspense';
import { getInitializedSelector } from './components/Redux/selectors/selectors';
import DrawerContainer from './components/Drawer/DrawerContainer/DrawerContainer';

const ProfileContainer = React.lazy(() =>
  import('./components/Profile/ProfileContainer')
);
const UsersContainer = React.lazy(() =>
  import('./components/Users/UsersContainer')
);

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Loader />;
    }

    return (
      <div className={styles.container}>
        <HeaderContainer />
        <DrawerContainer />
        <div className={styles.wrapper}>
          <Navbar />
          <div className={styles.content}>
            <Switch>
              <Route exact path='/' render={() => <LoginContainer />} />
              <Route path='/login' render={() => <LoginContainer />} />
              <Route
                path='/dialogs/:dialogNumber?'
                render={() => <DialogsContainer />}
              />
              <Route
                path='/profile/:userID?'
                render={withSuspense(ProfileContainer)}
              />
              <Route path='/settings' render={() => <Settings />} />
              <Route path='/users' render={withSuspense(UsersContainer)} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: getInitializedSelector(state),
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
