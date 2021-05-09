import React from "react";

const SearchBar = ({
  input: query,
  onChange: setquery,
  onKeyUp: searchQuery,
}) => {
  const BarStyling = {
    width: "90%",
    background: "#f2f7f3",
    borderRadius: "10px",
    padding: "0.5rem",
    margin: "0.5rem",
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchQuery();
    }
  };

  return (
    <div>
      <input
        style={BarStyling}
        key="query1"
        type="search"
        value={query}
        placeholder="Type movie title and press enter"
        onKeyPress={handleKeyPress}
        onChange={(e) => setquery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
