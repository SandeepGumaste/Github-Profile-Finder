const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    case "SET_ISLOADING":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default githubReducer;
