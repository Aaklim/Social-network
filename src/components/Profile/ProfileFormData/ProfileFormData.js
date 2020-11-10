import React from 'react';
import styles from './ProfileFormData.module.scss';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../../ValidateComonents/Input';
import { required, maxLengthInput } from '../../Controls/Controls';
import Button from '../../Button/Button';

const ProfileFormData = (props) => {
  return (
    <React.Fragment>
      <form onSubmit={props.handleSubmit} className={styles.descriptionBlock}>
        <div className={styles.imageSection}>
          <img
            src={
              props.profile.photos.large ||
              'https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png'
            }
            alt='User'
          />
          {props.match.params.userID === undefined && (
            <input
              type='file'
              onChange={props.dawnloadHandler}
              className={styles.inputFile}
            />
          )}
        </div>

        {props.error ? <div style={{ color: 'red' }}>{props.error}</div> : null}
        <div className={styles.profileItems}>
          <div className={styles.fullName}>{props.profile.fullName}</div>
          <ul>
            <li>
              <div className={styles.fieldSection}>
                <span className={styles.titleAboutMe}>About me:</span>
                <Field
                  name='aboutMe'
                  component={Input}
                  placeholder='aboutMe'
                  validate={[required, maxLengthInput]}
                />
              </div>
            </li>

            <li>
              <div className={styles.fieldSection}>
                <span className={styles.title}>LookingForAJob:</span>
                <Field
                  name='lookingForAJob'
                  component={Input}
                  type='checkbox'
                />
              </div>
            </li>
            <li>
              <div>
                <div className={styles.title}>Contacts:</div>
                <div className={styles.contacts}>
                  <div>
                    <div className={styles.titleGithub}>Github:</div>
                    <Field
                      name='contacts.github'
                      component={Input}
                      placeholder='github'
                      validate={[required, maxLengthInput]}
                    />
                  </div>
                  <div>
                    <div className={styles.title}>Mainlink:</div>
                    <Field
                      name='contacts.mainLink'
                      component={Input}
                      placeholder='mainLink'
                      validate={[required, maxLengthInput]}
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className={styles.button}>
            <Button>Save Profile</Button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default reduxForm({ form: 'profile' })(ProfileFormData);
