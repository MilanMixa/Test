import "./RepositoryList.css";

export default function RepositoryList({ repos }) {
  console.log(repos);
  return (
    <div>
      <h2>Repositories:</h2>
      {repos.map((repo) => (
        <div className="divovi" key={repo.id}>
          <p>{repo.name}</p>
        </div>
      ))}
    </div>
  );
}

// repolist
