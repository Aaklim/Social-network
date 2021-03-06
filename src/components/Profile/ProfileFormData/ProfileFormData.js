import React from 'react';
import styles from './ProfileFormData.module.scss';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../../ValidateComonents/Input';
import { required, maxLengthInput } from '../../Controls/Controls';
import Button from '../../Button/Button';
import user from '../../../image/user.png';

const ProfileFormData = (props) => {
  return (
    <React.Fragment>
      <form onSubmit={props.handleSubmit} className={styles.descriptionBlock}>
        <div className={styles.imageSection}>
          <img src={props.profile.photos.large || user} alt='User' />
          {props.match.params.userID === undefined && (
            <input
              type='file'
              onChange={props.dawnloadHandler}
              className={styles.inputFile}
            />
          )}
        </div>

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
                  className={styles.firstInput}
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
                  className={styles.lookingForAjob}
                />
              </div>
            </li>
            <li>
              <div>
                <div className={styles.title}>
                  Contacts:{' '}
                  {props.error ? (
                    <span style={{ color: 'red' }}>{props.error}</span>
                  ) : null}
                </div>
                <div className={styles.contacts}>
                  <div>
                    <div className={styles.titleGithub}>github:</div>
                    <Field
                      name='contacts.github'
                      component={Input}
                      placeholder='github'
                      validate={[required, maxLengthInput]}
                    />
                  </div>
                  <div>
                    <div className={styles.title}>mainlink:</div>
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
