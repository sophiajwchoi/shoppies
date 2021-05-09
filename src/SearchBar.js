import react from "react";

const SearchBar = ({ input: query, onChange: setquery }) => {
  const BarStyling = {
    background: "#f2f7f3",
    margin: "0.2srem",
  };

  return (
    <div className="form-group has-search">
      <span className="fa fa-search form-control-feedback"></span>
      <input
        className="form-control"
        style={BarStyling}
        key="query1"
        type="search"
        value={query}
        placeholder="Type to search..."
        onChange={(e) => setquery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
