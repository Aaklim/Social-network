import React from 'react';
import styles from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MypostsContainer from './Myposts/MypostsContainer';
import Loader from '../Loader/Loader';

const Profile = (props) => {
  if (!props.profile) {
    return <Loader />;
  }
  return (
    <div className={styles.wrapper}>
      <ProfileInfo {...props} />
      {props.profile.userId === props.authUserId ? (
        <MypostsContainer
          posts={props.posts}
          addPost={props.addPostThunk}
          photo={props.profile.photos.small}
          fullName={props.profile.fullName}
        />
      ) : null}
    </div>
  );
};

export default Profile;
