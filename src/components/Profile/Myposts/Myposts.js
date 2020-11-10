import React from 'react';
import styles from './Myposts.module.scss';
import Post from './post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthTextArea } from '../../Controls/Controls';
import { Textarea } from '../../ValidateComonents/Textarea';
import Button from '../../Button/Button';

const Myposts = React.memo((props) => {
  let postsElements = props.posts.map((el) => (
    <Post
      message={el.post}
      key={el.post.toString()}
      likesCount={el.likesCount}
      photo={props.photo}
      fullName={props.fullName}
    />
  ));

  return (
    <form onSubmit={props.handleSubmit} className={styles.postsBlock}>
      <div className={styles.header}> My posts </div>
      <div className={styles.textAreaButtonSection}>
        <div className={styles.textarea}>
          <Field
            name='postTextArea'
            component={Textarea}
            validate={[required, maxLengthTextArea]}
            placeholder='Enter some thoughts'
          />
        </div>
        <div className={styles.button}>
          <Button>Add post</Button>
        </div>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </form>
  );
});

export default reduxForm({ form: 'Mypost' })(Myposts);
