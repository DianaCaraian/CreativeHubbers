const initState = { users: [] };
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      // return {
      //   ...state,
      //   name: action.name,
      // };
      console.log(state.users);
    case 'GET_USERS': {
      console.log('CEVA');

      return {
        ...state,
        users: action.payload,
      };
    }
    // console.log(action.payload);

    default:
      return state;
  }
};
export default userReducer;
