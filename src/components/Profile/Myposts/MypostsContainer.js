import React, { useState, useEffect } from 'react';
import Myposts from './Myposts';

const MypostsContainer = (props) => {
  const [postPhoto, setPostPhoto] = useState(null);
  const submitHandler = ({ postTextArea }) => {
    props.addPost(postTextArea);
  };
  useEffect(() => {
    setPostPhoto(props.photo);
  }, [props.photo]);

  return (
    <Myposts
      onSubmit={submitHandler}
      posts={props.posts}
      photo={postPhoto}
      fullName={props.fullName}
    />
  );
};

export default MypostsContainer;
