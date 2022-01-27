import SingleUser from "./SearchUser";
import { useContext } from "react";

import "./Users.css";

import GithubContext from "../../components/Navbar/context/github/GithubContext";

export default function Users() {
  const { users, loading } = useContext(GithubContext);

  return (
    <div className="milan">
      {loading && <div>Loading...</div>}
      {users && users.map((user) => <SingleUser key={user.id} user={user} />)}
    </div>
  );
}
