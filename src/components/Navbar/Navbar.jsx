import { Link } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">
        <h1>
          <i className="fab fa-github fa-xl"></i> Github Searcher{" "}
        </h1>
      </Link>
    </nav>
  );
}
