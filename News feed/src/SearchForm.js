import React, { useContext } from "react";
import { useGlobalContext } from "./context";
import { AppContext } from "./context";

const SearchForm = () => {
  const data = useContext(AppContext);
  const { handelSearch, query } = data;

  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h2>search news</h2>
      <input
        type="text"
        className="form-input"
        onChange={(e) => {
          handelSearch(e.target.value);
        }}
        value={query}
      />
    </form>
  );
};

export default SearchForm;
