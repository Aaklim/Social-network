import React, { Component } from 'react';
import {
  addPostThunk,
  getProfileThunk,
  getUserStatusThunk,
  updateUserStatusThunk,
  setProfilePhotoThunk,
  setProfileData,
} from '../Redux/actionsCreator/actionsCreator';
import { connect } from 'react-redux';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import withRedirect from '../HOC/withRedirect';
import {
  getPostsSelector,
  getProfileSelector,
  getUserIdSelector,
  getStatusSelector,
  getAuthUserIdSelector,
} from '../Redux/selectors/selectors';

class ProfileContainer extends Component {
  updateProfilestatus() {
    let userID = this.props.match.params.userID || this.props.userId;
    this.props.getProfileThunk(userID);
    this.props.getUserStatusThunk(userID);
  }
  componentDidMount() {
    this.updateProfilestatus();
  }
  componentDidUpdate(prevProps, prevsState) {
    if (prevProps.match.params.userID !== this.props.match.params.userID) {
      this.updateProfilestatus();
    }
  }
  render() {
    return <Profile {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    posts: getPostsSelector(state),
    profile: getProfileSelector(state),
    userId: getUserIdSelector(state),
    status: getStatusSelector(state),
    authUserId: getAuthUserIdSelector(state),
  };
};
const mapDispatchToProps = {
  addPostThunk,
  getProfileThunk,
  getUserStatusThunk,
  updateUserStatusThunk,
  setProfilePhotoThunk,
  setProfileData,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withRedirect
)(ProfileContainer);
