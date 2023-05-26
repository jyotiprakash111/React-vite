import { useState } from "react";
import "./App.css";
import { Searchbar } from "./components/searchbar/searchbar";
import SearchResults from "./components/searchbar/searchResultsList";
import HookForm from "./components/hookform/form";

function App() {
  const [results, setResults] = useState([]);
  return null;
  // <div className="App">
  //   <div className="search-bar-container">
  //     {/* <Searchbar setResults={setResults} />
  //     <SearchResults results={results} /> */}
  //     {/* <HookForm /> */}
  //   </div>
  // </div>
}

export default App;
