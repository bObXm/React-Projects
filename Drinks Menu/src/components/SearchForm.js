import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

function searchCocktail(){
  setSearchTerm(searchValue.current.value)
}

React.useEffect(()=>{
searchValue.current.focus()
},[])

function handelSubmit(e){
 e.preventDefault()
}

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handelSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorita cocktails</label>
          <input type="text" id="name" ref={searchValue} onChange={searchCocktail}></input>
        </div>
        
      </form>
    </section>
  );
};

export default SearchForm;
