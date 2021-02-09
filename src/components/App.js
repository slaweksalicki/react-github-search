import React from "react";
import "./App.css";
import SearchForm from "./SearchForm/SearchForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Search GitHub Repos</h1>
      </header>
      <div className="App-content">
        <SearchForm />
      </div>
    </div>
  );
}

export default App;
