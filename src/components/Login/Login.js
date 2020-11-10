import React from 'react';
import styles from './login.module.scss';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { required } from '../Controls/Controls';
import { Input } from '../ValidateComonents/Input';
import Button from '../Button/Button';

const Login = (props) => {
  if (props.isAuth) return <Redirect to='/profile' />;
  let freeAccount = (
    <div className={styles.freeAccount}>
      <div>Free account</div>
      <div>
        <span>Email:</span> free@samuraijs.com{' '}
      </div>
      <div>
        <span>Password:</span> free
      </div>
    </div>
  );

  return (
    <form onSubmit={props.handleSubmit} className={styles.main}>
      <label>Login</label>
      <Field
        name='email'
        component={Input}
        placeholder='email'
        validate={[required]}
      />
      <div className={styles.commonError}>{props.error}</div>
      <Field
        name='password'
        component={Input}
        placeholder='password'
        type='password'
        validate={[required]}
      />
      <div>
        <label className={styles.checkboxLabel} htmlFor='rememberMe'>
          Remember Me
        </label>
        <Field name='rememberMe' component='input' type='checkbox' />
      </div>
      <Button>Submit</Button>
      {props.captchaUrl ? (
        <div className={styles.captcha}>
          <img src={props.captchaUrl} alt='captcha' />

          <Field
            name='captchaUrl'
            component={Input}
            placeholder='captcha'
            validate={[required]}
          />
        </div>
      ) : (
        freeAccount
      )}
    </form>
  );
};

export default reduxForm({ form: 'login' })(Login);
