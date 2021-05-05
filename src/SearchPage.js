import React, { useState, useEffect } from "react";
import NominationList from "./NominationList";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
const API_KEY = process.env.OMDb_API_KEY;

const SearchPage = (props) => {
  const [movieList, setMovieList] = useState([]);
  const [nominationList, setNominationList] = useState([]);
  const [query, setQuery] = useState("");

  const searchQuery = async (input) => {
    const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`;
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => console.log(data));
    setQuery(input);
  };

  const removeNomination = async () => {};
  return (
    <div class="container">
      <div className="header">
        <h2>The shoppies</h2>
      </div>
      <div class="row">
        <div className="col SearchBar">
          <h5>
            Movie Title:
            <SearchBar input={query} onChange={searchQuery}></SearchBar>
          </h5>
        </div>
      </div>
      <div className="row">
        <SearchResults query={query} movieList={movieList}></SearchResults>
        <NominationList
          nominationList={nominationList}
          setNominationList={removeNomination}
        ></NominationList>
      </div>
    </div>
  );
};

export default SearchPage;
