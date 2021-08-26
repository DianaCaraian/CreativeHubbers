// const initState = { users: [], repo: [], content: [], languages: {}, path: '' };
const initState = () => {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('state')) {
    var local = JSON.parse(localStorage.getItem('state')).data;
  } else {
    local = { users: [], repo: [], content: [], languages: {}, path: '' };
  }

  let state = { ...local };
  console.log('State initialized successfully');
  return state;
};
const istate = initState();
const setLStorage = (data) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('state', JSON.stringify({ data }));
  }
};
const userReducer = (state = istate, action) => {
  switch (action.type) {
    case 'GET_USERS': {
      setLStorage({
        ...state,
        users: action.payload,
      });

      return {
        ...state,
        users: action.payload,
      };
    }
    case 'GET_REPOS_CONTENT': {
      setLStorage({
        ...state,
        content: action.payload,
      });
      return {
        ...state,
        content: action.payload,
      };
    }
    case 'GET_REPO_DETAILS': {
      setLStorage({
        ...state,
        repo: action.payload,
      });
      return {
        ...state,
        repo: action.payload,
      };
    }
    case 'GET_LANGUAGES': {
      setLStorage({
        ...state,
        languages: action.payload,
      });
      return {
        ...state,
        languages: action.payload,
      };
    }
    case 'SET_PATH': {
      setLStorage({
        ...state,
        path: action.payload,
      });
      return {
        ...state,
        path: action.payload,
      };
    }

    // console.log(action.payload);

    default:
      return state;
  }
};
export default userReducer;
