export const getUsers = (payload) => {
  return {
    type: 'GET_USERS',
    payload: payload,
  };
};
export const getContent = (payload) => {
  return {
    type: 'GET_REPOS_CONTENT',
    payload: payload,
  };
};
export const getRepoDetails = (payload) => {
  return {
    type: 'GET_REPO_DETAILS',
    payload: payload,
  };
};
export const getLanguages = (payload) => {
  return {
    type: 'GET_LANGUAGES',
    payload: payload,
  };
};
export const setPath = (payload) => {
  return {
    type: 'SET_PATH',
    payload: payload,
  };
};
