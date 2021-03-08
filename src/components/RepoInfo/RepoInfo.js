import "./RepoInfo.css";

const RepoInfo = (props) => {
  return (
    <div>
      <div className="popup-backdrop" onClick={() => props.clicked()}></div>
      <div className="popup">
        <div className="popup__top">
          <button className="popup__close" onClick={() => props.clicked()}>
            X
          </button>
          <img
            className="popup__avatar"
            src={props.clickedRepo.owner.avatar_url}
            alt={props.clickedRepo.owner.login}
          />
          <a
            rel="noreferrer"
            target="_blank"
            href={props.clickedRepo.owner.html_url}
          >
            {props.clickedRepo.owner.login}
          </a>
        </div>
        <br />
        <a rel="noreferrer" target="_blank" href={props.clickedRepo.html_url}>
          <h3>{props.clickedRepo.name}</h3>
        </a>
        <p>Description: {props.clickedRepo.description}</p>
        <p className="popup__lang">Language: {props.clickedRepo.language}</p>
      </div>
    </div>
  );
};

export default RepoInfo;
