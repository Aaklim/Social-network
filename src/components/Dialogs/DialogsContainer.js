import React from 'react';
import { compose } from 'redux';
import { sendMessageThunk } from '../Redux/actionsCreator/actionsCreator';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withRedirect from '../HOC/withRedirect';
import {
  getDialogsPageSelector,
  getAuthUserNameSelector,
} from '../Redux/selectors/selectors';
import { withRouter } from 'react-router-dom';

const DialogsContainer = (props) => {
  const dialogNumber = props.match.params.dialogNumber;
  const sendMessageHandler = ({ textareaDialogs }) => {
    props.sendMessageThunk(textareaDialogs, dialogNumber);
  };

  const createMessages = (Component) => {
    let messagesElements = null;
    if (
      dialogNumber &&
      props.dialogsPage.dialogs.find((d) => d.id === Number(dialogNumber))
    ) {
      messagesElements = props.dialogsPage.dialogs
        .find((d) => d.id === Number(dialogNumber))
        .messages.map((m, index) => (
          <Component
            message={m}
            id={index}
            key={m[index]}
            userName={props.authUserName}
          />
        ));
    }
    return messagesElements;
  };
  return (
    <Dialogs
      createMessages={createMessages}
      onSubmit={sendMessageHandler}
      authUserName={props.authUserName}
      dialogsPage={props.dialogsPage}
    />
  );
};
const mapStateToProps = (state) => {
  return {
    dialogsPage: getDialogsPageSelector(state),
    authUserName: getAuthUserNameSelector(state),
  };
};
const mapDispatchToProps = {
  sendMessageThunk,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withRedirect
)(DialogsContainer);
