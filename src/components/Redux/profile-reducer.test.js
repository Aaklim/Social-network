const { addPost } = require('./actionsCreator/actionsCreator');
const { default: profileReducer } = require('./profile-reducer');
let initialState = {
  posts: [
    { id: 1, post: 'Hello everybody', likesCount: '0' },
    { id: 2, post: 'Hello YO', likesCount: '25' },
  ],
  profile: null,
  status: null,
};
it('post length should be incremented', () => {
  //1. test data

  let action = addPost('Hallo andrew');
  //2.action
  let newState = profileReducer(initialState, action);

  //3.expectation
  expect(newState.posts.length).toBe(3);
});
it('message should be correct', () => {
  let action = addPost('Hallo andrew');
  //2.action
  let newState = profileReducer(initialState, action);

  //3.expectation
  expect(newState.posts[2].post).toBe('Hallo andrew');
});
