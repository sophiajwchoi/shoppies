import React, { useState } from "react";
import NominationList from "./NominationList";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
const API_KEY = process.env.OMDb_API_KEY;

const SearchPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [nominationList, setNominationList] = useState([]);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("Nominations");

  const searchQuery = async () => {
    if (query !== "") {
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
    } else {
      setMovieList([]);
    }
  };

  const setQueryInput = (input) => {
    setQuery(input);
  };

  const removeNomination = (movie) => {
    try {
      const alteredNominationList = nominationList.filter(
        (m) => m.imdbID !== movie.imdbID
      );

      setNominationList(alteredNominationList);
      if (nominationList.length < 6) {
        setStatus("Nominations");
      }
    } catch (error) {
      console.log("Unable to remove the movie from the nomination list", error);
    }
  };

  const addNomination = (movie) => {
    try {
      const exist = nominationList.some((m) => m.imdbID === movie.imdbID);

      if (!exist && nominationList.length < 5) {
        setNominationList(nominationList.concat([movie]));
      }
      if (nominationList.length === 4) {
        setStatus("You've selected 5 movies 🎉!");
      }
    } catch (error) {
      console.log("Unable to add to the nomination list ", error);
    }
  };

  return (
    <div className="container">
      <div className="title">
        <h2>The shoppies</h2>
        <button
          type="button"
          className="btn btn-info btn-md float-right"
          disabled
        >
          {status} ({nominationList.length})
        </button>
      </div>

      <h5 className="clear">Nominate up to 5 faviourite movies</h5>
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
