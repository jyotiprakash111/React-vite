import { useState } from "react";
import "./App.css";
import { Searchbar } from "./components/searchbar/searchbar";
import SearchResults from "./components/searchbar/searchResultsList";
import HookForm from "./components/hookform/form";
// import TailwindLoginform from "./tailwindcss/login";
// import TailwindEcom from '../tailwindframework/Ecomm';
import Pagination from './components/pagination';

function App() {
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      <div className="search-bar-container">
        {/* <Searchbar setResults={setResults} />
      <SearchResults results={results} /> */}
        <Pagination />
      </div>
    </div>
  );
}

export default App;
