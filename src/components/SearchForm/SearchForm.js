import React, { useState, useEffect } from "react";
import "./SearchForm.css";
import SearchResults from "../SearchResults/SearchResults";
import Loader from "../UI/Loader/Loader";
import RepoInfo from "../RepoInfo/RepoInfo";

const SearchForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [repos, setRepos] = useState([]);
  const [clickedRepo, setClickedRepo] = useState([]);
  const [closePopup, setClosePopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!inputValue) {
      return;
    }

    setIsLoading(true);

    fetch("https://api.github.com/search/repositories?q=" + inputValue)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setRepos(data.items);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(true);
        console.error("error: ", error);
      });

    document.title = `Search for: ${inputValue}`;
  }, [inputValue]);

  return (
    <>
      {clickedRepo.id && !closePopup ? (
        <RepoInfo
          clickedRepo={clickedRepo}
          clicked={() => {
            setClosePopup(true);
          }}
        />
      ) : null}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setInputValue(event.target.elements.query.value);
        }}
      >
        <input
          type="text"
          name="query"
          placeholder="Search GitHub repo here..."
        />
        <button>Search</button>
      </form>
      {error && <h2>Something went wrong! Try again!</h2>}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SearchResults
            repos={repos}
            clicked={(repo) => {
              setClickedRepo(repo);
              setClosePopup(false);
            }}
          />
        </>
      )}
    </>
  );
};

export default SearchForm;
