import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_API = "https://api.github.com/search/users";

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const responce = await fetch(`${GITHUB_API}?${params}`);

    const { items } = await responce.json();
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  // Get A Single User
  const getUser = async (login) => {
    setLoading();

    const responce = await fetch(`https://api.github.com/users/${login}`);

    if (responce.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await responce.json();
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }

    const { items } = await responce.json();
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  // Clear users
  const clearUsers = () => {
    dispatch({ type: "CLEAR_USERS" });
  };

  //   SET Loading
  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        searchUsers,
        clearUsers,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
