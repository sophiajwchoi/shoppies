import React from "react";

const SearchResults = ({ query, movieList, addNomination }) => {
  return (
    <div className="col SearchResults">
      <h5>Results for {query}: </h5>
      <ul>
        {movieList.map((movie) => (
          <li key={movie.imdbID}>
            {movie.Title + " (" + movie.Year + ")"}
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => addNomination(movie)}
            >
              Nominate
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
