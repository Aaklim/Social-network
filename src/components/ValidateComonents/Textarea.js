import React from 'react';
import styles from './Textarea.module.scss';
import cn from 'classnames';

export const Textarea = ({ input, meta, ...props }) => {
  let isError =
    (input.value.length === 0 && meta.touched) || input.value.length > 139;
  return (
    <div className={cn(styles.wrapper, { [styles.error]: isError })}>
      {isError ? <div className={styles.error}>{meta.error}</div> : null}
      <textarea {...input} {...props} maxLength='140' />
    </div>
  );
};
