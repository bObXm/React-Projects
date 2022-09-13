import React, { Children, useContext, useEffect, useReducer } from "react";

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";
import reducer from "./reducer";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  hits: [],
  query: "react",
  page: 0,
  nbPages: 0,
};

const AppContext = React.createContext();

function AppProvider({ children }) {
  //useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  //fetch data
  const fetchData = async (url) => {
    try {
      dispatch({ type: SET_LOADING });
      const response = await fetch(url);
      const data = await response.json();

      dispatch({
        type: SET_STORIES,
        paylaod: { hits: data.hits, nbPages: data.nbPages },
      });
    } catch (err) {
      console.log(err);
    }
  };

  //remove story  
  const removeStory=(id)=>{
    dispatch({type:REMOVE_STORY, paylaod:id})
  }

  //handel search
  const handelSearch=(query)=>{
    dispatch({type:HANDLE_SEARCH, paylaod:query})
  }

  //handel page
  const handlePage = (value) => {
    dispatch({ type: HANDLE_PAGE, payload: value })
  }

  useEffect(() => {
    const { query, page } = state;
    let url = API_ENDPOINT + "query=" + query + "&page=" + page;

    fetchData(url);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider value={{ ...state,removeStory,handelSearch,handlePage }}>{children}</AppContext.Provider>
  );
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
