import { PageProps } from "../../../../.next/types/app/layout";

interface ReposResponse {
  name: string;
}

export default async function Page({ params }: PageProps) {
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
