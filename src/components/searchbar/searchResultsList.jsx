import React from "react";
import "./searchResultsList.css";
import SearchResult from "./searchResults";

function SearchResultsList({ results }) {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result} key={id} />;
      })}
    </div>
  );
}

export default SearchResultsList;
