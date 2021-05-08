import React from "react";

const SearchBar = ({
  input: query,
  onChange: setquery,
  onKeyUp: searchQuery,
}) => {
  const BarStyling = {
    width: "80%",
    background: "#F2F1F9",
    border: "1.5px solid black",
    borderRadius: "4px",
    padding: "0.5rem",
    margin: "0.5rem",
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
        searchQuery()
    }
  };

  return (
    <div>
      <i className="fa fa-search"></i>
      <input
        style={BarStyling}
        key="query1"
        value={query}
        placeholder="Type movie title and press enter"
        onKeyPress={handleKeyPress}
        onChange={(e) => setquery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
