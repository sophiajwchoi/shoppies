import React from "react";

const NominationList = ({ nominationList, unNominate }) => {
  return (
    <div className="col NominationList">
      <h5>Nominations: </h5>
      <ul>
        {nominationList.map((movie) => (
          <li key={movie.imdbID}>
            {movie.Title + " (" + movie.Year + ")"}
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => unNominate(movie)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NominationList;
