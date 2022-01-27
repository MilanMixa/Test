import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>The page doesn't exist</h1>
      <Link to="/">
        <button>Go back</button>
      </Link>
    </div>
  );
}
