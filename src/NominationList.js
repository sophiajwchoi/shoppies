import React from "react";

const NominationList = ({ nominationList, setNominationList }) => {

  const removeNomination = async (id) => {};
  return (
    <div className="col NominationList">
      <h5>Nominations: </h5>
      <ul>
        {nominationList.map((movie, index) => (
          <li key={index}>
            {movie}
            <button type="button" class="btn btn-secondary btn-sm" onClick={() => removeNomination(index)}>
              Danger
            </button>
          </li>
        ))}
        {/* <li key={1}>
          Hi{" "}
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            onClick={() => removeNomination(movie.id)}
          >
            Remove
          </button>
        </li> */}
      </ul>
    </div>
  );
};

export default NominationList;
