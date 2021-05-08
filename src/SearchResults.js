import React from "react";

const SearchResults = ({ query, movieList, addNomination, nominationList }) => {
  return (
    <div className="col SearchResults">
      <h5>Results for {query}: </h5>
      <ul>
        {movieList.map((movie) => (
          <li key={movie.imdbID}>
            {movie.Title + " (" + movie.Year + ")"}
            {!nominationList.some((m) => m.imdbID === movie.imdbID) ? (
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => addNomination(movie)}
              >
                Nominate
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary btn-sm"
                disabled="true"
                onClick={() => addNomination(movie)}
              >
                Nominated
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
