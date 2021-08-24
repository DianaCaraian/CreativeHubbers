const initState = {
  name: 'ana',
};
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
};
export default userReducer;
