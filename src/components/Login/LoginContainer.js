import React from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { login } from '../Redux/actionsCreator/actionsCreator';
import {
  getCaptchaUrlSelector,
  getIsAuthSelector,
} from '../Redux/selectors/selectors';

const LoginContainer = (props) => {
  const submitHandler = ({ email, password, rememberMe, captchaUrl }) => {
    props.login(email, password, rememberMe, captchaUrl);
  };

  return (
    <Login
      onSubmit={submitHandler}
      isAuth={props.isAuth}
      captchaUrl={props.captchaUrl}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: getIsAuthSelector(state),
    captchaUrl: getCaptchaUrlSelector(state),
  };
};
export default connect(mapStateToProps, { login })(LoginContainer);
