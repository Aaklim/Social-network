import React from 'react';
import styles from './Input.module.scss';
import cn from 'classnames';

export const Input = ({ input, meta, ...props }) => {
  let isError =
    (input.value.length === 0 && meta.touched) || input.value.length > 49;
  return (
    <div className={cn({ [styles.error]: isError }, styles.wrapper)}>
      {isError ? <div className={styles.error}>{meta.error}</div> : null}
      <input {...input} {...props} id='input' maxLength='50' />
    </div>
  );
};
