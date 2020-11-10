import React, { useState } from 'react';
import Loader from '../../Loader/Loader';
import styles from './ProfileInfo.module.scss';
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import ProfileFormData from '../ProfileFormData/ProfileFormData';
import Button from '../../Button/Button';
import user from '../../../image/user.png';

const ProfileInfo = React.memo((props) => {
  const [editMode, setEditmode] = useState(false);

  if (!props.profile) {
    return <Loader />;
  }

  const dawnloadHandler = (e) => {
    let photo = e.target.files[0];
    props.setProfilePhotoThunk(photo);
  };
  const changeEditMode = () => {
    setEditmode(!editMode);
  };

  const profileFormDataHandler = ({ lookingForAJob, contacts, aboutMe }) => {
    props
      .setProfileData(
        props.profile.userId,
        props.profile.fullName,
        lookingForAJob,
        contacts.github,
        contacts.mainLink,
        aboutMe
      )
      .then((response) => {
        changeEditMode();
      })
      .catch((error) => console.log(error));
  };
  const ProfileData = () => {
    return (
      <React.Fragment>
        <div className={styles.descriptionBlock}>
          <div className={styles.imageSection}>
            <img src={props.profile.photos.large || user} alt='User' />
            <ProfileStatus
              status={props.status}
              updateUserStatusThunk={props.updateUserStatusThunk}
            />
          </div>

          <div className={styles.profileItems}>
            <div className={styles.fullName}>{props.profile.fullName}</div>
            <ul>
              <li>
                <div>
                  <span className={styles.title}>About me:</span>
                  {props.profile.aboutMe}
                </div>
              </li>

              <li>
                <div>
                  <span className={styles.title}>LookingForAJob:</span>
                  {props.profile.lookingForAJob ? 'yes' : 'No'}
                </div>
              </li>
              <li>
                <div>
                  <div className={styles.title}>Contacts:</div>
                  <div className={styles.contacts}>
                    <div>
                      <div className={styles.title}>Github:</div>
                      {props.profile.contacts.github}
                    </div>
                    <div>
                      <div className={styles.title}>Mainlink:</div>
                      {props.profile.contacts.mainLink}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className={styles.buttonSection}>
              {props.profile.userId === props.userId ? (
                <Button onClick={changeEditMode}>Edit Profile</Button>
              ) : null}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };
  return (
    <React.Fragment>
      {editMode ? (
        <ProfileFormData
          {...props}
          initialValues={props.profile}
          onSubmit={profileFormDataHandler}
          dawnloadHandler={dawnloadHandler}
        />
      ) : (
        <ProfileData />
      )}
    </React.Fragment>
  );
});

export default ProfileInfo;
