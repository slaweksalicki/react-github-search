import "./SearchResults.css";

const SearchResults = (props) => {
  return (
    <ul>
      {props.repos.map((repo) => {
        return (
          <li key={repo.id} onClick={() => props.clicked(repo)}>
            <div className="search-results__title">
              <strong>{repo.name}</strong> by {repo.owner.login}
            </div>
            <div className="search-results__info">
              <div>{repo.language}</div>
              <div>⭐️ {repo.stargazers_count}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;
