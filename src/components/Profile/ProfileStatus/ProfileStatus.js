import React, { useState, useEffect } from 'react';

const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState();

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  const statusChangeHandler = (e) => {
    setStatus(e.target.value);
  };

  const statusChange = (e) => {
    props.updateUserStatusThunk(e.target.value);
    setEditMode(!editMode);
  };
  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={() => setEditMode(!editMode)}>
            {status ? status : '-------'}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <span>Status:</span>
          <input
            autoFocus={true}
            onBlur={(e) => statusChange(e)}
            onChange={statusChangeHandler}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
