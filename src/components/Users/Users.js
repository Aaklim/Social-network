import React from 'react';
import styles from './users.module.scss';
import User from './User/User';
import PaginatorContainer from '../Paginator/PaginatorContainer';

const Users = (props) => {
  return (
    <div className={styles.wrapper}>
      <PaginatorContainer
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        getCurrentpage={props.getCurrentpage}
        filter={props.filter}
        toggleFilter={props.toggleFilter}
      />
      <div className={styles.users}>
        {props.users.map((u) => (
          <User
            user={u}
            key={u.id}
            follow={props.follow}
            unfollow={props.unfollow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
