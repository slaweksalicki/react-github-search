import "./SearchResults.css";

const SearchResults = (props) => {
  console.log(props);
  return (
    <ul>
      {props.repos.map((repo) => {
        return (
          <li key={repo.id} onClick={() => props.clicked(repo)}>
            <div>
              <strong>{repo.name}</strong> by {repo.owner.login}
            </div>
            {repo.language} --- ⭐️: {repo.stargazers_count}
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;
