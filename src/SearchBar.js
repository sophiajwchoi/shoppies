import React from "react";

const SearchBar = ({ input: query, onChange: setquery }) => {
  const BarStyling = {
    width: "80%",
    background: "#F2F1F9",
    border: "1.5px solid black",
    borderRadius: "4px",
    padding: "0.5rem",
    margin: "0.5rem",
  };
  return (
    <div>
      <input
        style={BarStyling}
        key="query1"
        value={query}
        placeholder="Enter movie title"
        onChange={(e) => setquery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
