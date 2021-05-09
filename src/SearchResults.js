import MovieInfo from "./MovieInfo";
const SearchResults = ({
  query,
  movieList,
  addNomination,
  nominationList,
  resultStatus,
}) => {
  return (
    <div className="col SearchResults">
      <h5>Results for "{query}": </h5>
      <h6>{resultStatus}</h6>
      <ul>
        {movieList.map((movie) => (
          <li key={movie.imdbID}>
            <h6 className="font-weight-bold">
              {movie.Title + " (" + movie.Year + ")"}
            </h6>
            {!nominationList.some((m) => m.imdbID === movie.imdbID) ? (
              <button
                type="button"
                className="btn btn-success btn-sm"
                onClick={() => addNomination(movie)}
              >
                Nominate
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-success btn-sm"
                disabled={true}
                onClick={() => addNomination(movie)}
              >
                Nominated
              </button>
            )}
            <MovieInfo movie={movie}></MovieInfo>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
