import React, { useState } from "react";

function Search({setSearch}) {
  const [searchPoke, setSearchState] = useState("")

  function handleSubmit(e){
    e.preventDefault();
    setSearch(searchPoke);
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <form className="search" onSubmit={handleSubmit}>
        <input className="prompt" onChange={(e)=>setSearchState(e.target.value)} onSubmit={handleSubmit} />
        <i className="search icon" type="submit" onClick={handleSubmit}/>
        </form>
      </div>
    </div>
  );
}

export default Search;
