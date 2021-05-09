import React from "react";

const MovieInfo = ({ movie }) => {
  const posterStyling = {
    width: "15rem",
  };
  return (
    <div className="card" style={posterStyling}>
      <img className="card-img-top" src={movie.Poster} alt="Movie Poster" />{" "}
    </div>
  );
};

export default MovieInfo;
