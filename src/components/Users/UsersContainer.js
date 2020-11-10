import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../Loader/Loader';
import {
  getCurrentPageThunk,
  setUsersThunk,
  setFollowedUserThunk,
  deleteFollowedUserThunk,
  toggleFilter,
} from '../Redux/actionsCreator/actionsCreator';
import {
  getUsersSelector,
  getFilterSelector,
} from '../Redux/selectors/selectors';
import Users from './Users';

class UserContainer extends Component {
  componentDidMount() {
    this.props.setUsersThunk(this.props.currentPage, this.props.pageSize);
  }
  getCurrentpage = (page) => {
    this.props.getCurrentPageThunk(page, this.props.pageSize);
  };

  render() {
    if (this.props.isloading) return <Loader />;
    console.log('filteredUsers', this.props.users);
    console.log('Filter', this.props.filter);
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        getCurrentpage={this.getCurrentpage}
        users={this.props.users}
        unfollow={this.props.deleteFollowedUserThunk}
        follow={this.props.setFollowedUserThunk}
        filter={this.props.filter}
        toggleFilter={this.props.toggleFilter}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isloading: state.usersPage.isloading,
    filter: getFilterSelector(state),
  };
};

const mapDispatchToProps = {
  setFollowedUserThunk,
  deleteFollowedUserThunk,
  setUsersThunk,
  getCurrentPageThunk,
  toggleFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
