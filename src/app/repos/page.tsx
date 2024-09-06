import { use } from "react";

interface ReposResponse {
	name: string;
}

const fetchRepos = async () => {
	const response = await fetch("https://api.github.com/users/ovinidev/repos");
	const repos: ReposResponse[] = await response.json();

	return repos;
};

export default function Page() {
	const repos = use(fetchRepos());

	return (
		<div className="pb-6">
			<ul>
				{repos.map((repo) => {
					return <li key={repo.name}>{repo.name}</li>;
				})}
			</ul>
		</div>
	);
}
