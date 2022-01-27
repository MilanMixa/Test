import { useState } from "react";
import { useContext } from "react";
import GithubContext from "../context/github/GithubContext";

export default function SearchBar() {
  const [text, setText] = useState("");

  const { searchData } = useContext(GithubContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      alert("Search field empty ");
    } else {
      // search users
      searchData(text);

      setText("");
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search"
            value={text}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
}
