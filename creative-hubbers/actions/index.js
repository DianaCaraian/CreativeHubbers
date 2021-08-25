export const changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name: name,
  };
};
export const getUsers = (payload) => { 
  return {
    type: 'GET_USERS',
    payload: payload,
  };
};
export const getRepos = (payload) => {
  return {
    type: 'GET_REPOS',
    payload: payload,
  };
};
