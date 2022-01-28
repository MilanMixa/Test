import { Link } from "react-router-dom";

//styles
import "./SearchUser.css";

export default function SearchUser({ user }) {
  // console.log(user);

  return (
    <div className="container">
      <div className="card">
        <img src={user.avatar_url} alt="avatar" />

        <h3 className="name">{user.login}</h3>
        <Link className="content" to={`/user/${user.login}`}>
          <button type="button" className="btn">
            More info
          </button>
        </Link>
      </div>
    </div>
  );
}
