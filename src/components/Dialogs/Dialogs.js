import React from 'react';
import styles from './Dialogs.module.scss';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../ValidateComonents/Input';

import Button from '../Button/Button';
import { maxLengthInput, required } from '../Controls/Controls';

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));
  let messagesElements = props.createMessages(Message);
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsWrapper}>
        <div className={styles.dialogsItems}>
          <div className={styles.followedUsers}>Followed users</div>
          {dialogsElements}
        </div>
        <div className={styles.messages}>{messagesElements}</div>
      </div>
      <form onSubmit={props.handleSubmit} className={styles.formSection}>
        <Field
          component={Input}
          name='textareaDialogs'
          validate={[required, maxLengthInput]}
          placeholder='Enter your message'
          disabled={!messagesElements}
        />

        <div>
          <Button disabled={!messagesElements}>Send </Button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({ form: 'dialogs' })(Dialogs);
