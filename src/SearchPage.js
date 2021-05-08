import React, { useState } from "react";
import NominationList from "./NominationList";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
const API_KEY = process.env.OMDb_API_KEY;

const SearchPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [nominationList, setNominationList] = useState([]);
  const [query, setQuery] = useState("");

  const searchQuery = async () => {
    const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${query}&type=movie`;
    try {
      const response = await fetch(API_URL);
      const movies = await response.json();

      if (movies.Response === "True") {
        setMovieList(movies.Search);
      } else {
        setMovieList([]);
      }
    } catch (error) {
      console.log("Unable to search:", error);
    }
  };

  const setQueryInput = (input) => {
    setQuery(input);
  };

  const removeNomination = async (movie) => {
    try {
      const alteredNominationList = nominationList.filter(
        (m) => m.imdbID !== movie.imdbID
      );
      console.log(movie.imdbID);
      console.log(nominationList);

      setNominationList(alteredNominationList);
    } catch (error) {
      console.log("Unable to remove the movie from the nomination list", error);
    }
  };

  const addNomination = async (movie) => {
    try {
      console.log(movie);
      const exist = nominationList.some((m) => m.imdbID === movie.imdbID);
      console.log(exist);
      if (!exist && nominationList.length < 5) {
        setNominationList(nominationList.concat([movie]));
        return true;
      }
    } catch (error) {
      console.log("Unable to add to the nomination list ", error);
    }
    return false;
  };

  return (
    <div className="container">
      <div className="title">
        <h2>The shoppies</h2>
        <h5>You can nominate your top 5 faviourite films </h5>
      </div>
      <div className="row">
        <div className="col SearchBar">
          <h5>
            Movie Title:
            <SearchBar
              input={query}
              onChange={setQueryInput}
              onKeyUp={searchQuery}
            ></SearchBar>
          </h5>
        </div>
      </div>
      <div className="row">
        <SearchResults
          query={query}
          movieList={movieList}
          addNomination={addNomination}
          nominationList={nominationList}
        ></SearchResults>
        <NominationList
          nominationList={nominationList}
          unNominate={removeNomination}
        ></NominationList>
      </div>
    </div>
  );
};

export default SearchPage;
