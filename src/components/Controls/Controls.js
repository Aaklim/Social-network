export const required = (value) => {
  if (value) return undefined;
  return 'Error textarea is empty';
};

export const maxLengthTextArea = (value) => {
  if (value.length > 139) return 'Max length is 140';
  return undefined;
};
export const maxLengthInput = (value) => {
  if (value.length > 139) return 'Max length is 140';
  return undefined;
};
