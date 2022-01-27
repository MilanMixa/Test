import { useEffect, useContext } from "react";
import GithubContext from "../../components/Navbar/context/github/GithubContext";
import { useParams } from "react-router-dom";

import "./SingleUser.css";
import RepositoryList from "../../components/Navbar/Repository/RepositoryList";

function SingleUser() {
  const { getSingleUser, user, loading, getRepos, repos } =
    useContext(GithubContext);

  const params = useParams();
  console.log(user);

  useEffect(() => {
    getSingleUser(params.login);
    getRepos(params.login);
  }, []);

  const {
    name,
    type,
    email,
    location,
    company,
    avatar_url,
    bio,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  if (loading) {
    return <h3>Loading</h3>;
  }

  return (
    <div className="main">
      {/* <Link to="/">
        <button className="btn">Back To Search</button>
      </Link> */}

      <div className="info">
        <div className="left">
          <img src={avatar_url} alt="avatar" />
          <p>{login}</p>
          <p>Location: {location}</p>
        </div>
        <div className="right">
          <h2>{name}</h2>
          <p>Bio: {bio}</p>
          <p>Company: {company}</p>
          <p>Email: {email}</p>

          <a href={html_url} target="_blank" rel="noreferrer" className="btn">
            Visit Profile
          </a>
        </div>
      </div>
      <div className="git-info">
        <div className="git">Followers: {followers}</div>
        <div className="git">Following: {following}</div>
        <div className="git">Public Repos: {public_repos}</div>
        <div className="git">Public Gists: {public_gists}</div>
      </div>
      <RepositoryList repos={repos} />
    </div>
  );
}

export default SingleUser;
