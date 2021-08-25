const initState = { users: [], repos: [] };
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_USERS': {
      return {
        ...state,
        users: action.payload,
      };
    }
    case 'GET_REPOS': {
      return {
        ...state,
        repos: action.payload,
      };
    }
    // console.log(action.payload);

    default:
      return state;
  }
};
export default userReducer;
