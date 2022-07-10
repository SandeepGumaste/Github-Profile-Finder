import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
import { fetchUsers } from "../../api/api";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    isLoading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUsersData = async () => {
    setIsLoading();
    const usersData = await fetchUsers();
    dispatch({ type: "GET_USERS", payload: usersData });
  };

  const setIsLoading = () => {
    dispatch({ type: "SET_ISLOADING" });
  };

  return (
    <GithubContext.Provider
      value={{ users: state.users, isLoading: state.isLoading, fetchUsersData }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
