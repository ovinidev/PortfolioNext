interface ReposResponse {
  name: string;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const response = await fetch(
    `https://api.github.com/users/${params.slug}/repos`,
  );
  const repos: ReposResponse[] = await response.json();

  return (
    <div>
      <ul>
        {repos.map((repo) => {
          return <li key={repo.name}>{repo.name}</li>;
        })}
      </ul>
    </div>
  );
}
