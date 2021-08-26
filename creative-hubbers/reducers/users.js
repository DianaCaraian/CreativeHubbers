const initState = { users: [], repo: [], content: [], languages: {} };
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_USERS': {
      return {
        ...state,
        users: action.payload,
      };
    }
    case 'GET_REPOS_CONTENT': {
      return {
        ...state,
        content: action.payload,
      };
    }
    case 'GET_REPO_DETAILS': {
      return {
        ...state,
        repo: action.payload,
      };
    }
    case 'GET_LANGUAGES': {
      return {
        ...state,
        languages: action.payload,
      };
    }

    // console.log(action.payload);

    default:
      return state;
  }
};
export default userReducer;
