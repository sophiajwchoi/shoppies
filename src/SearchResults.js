import React from "react";

const SearchResults = ({ query, movieList }) => {
  return (
    <div className="col SearchResults">
      <h5>Results for {query}: </h5>
      <ul>
        {movieList.map((movie, index) => (
          <li>
            {movie}
            <button
              type="button"
              class="btn btn-primary btn-sm"
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
