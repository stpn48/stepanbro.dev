import { Repository } from "@/types";

const query = `{
  user(login: "stepan-rd") {
    pinnedItems(first: 6) {
      totalCount
      edges {
        node {
          ... on Repository {
            id
            name
            description
            url
          }
        }
      }
    }
  }
}`;

async function fetchRepos() {
  try {
    let repos: Repository[] = [];
    const res = await fetch("https://api.github.com/graphql", {
      next: { revalidate: 28000 },
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    repos = data.data.user.pinnedItems.edges.map((repo: { node: Repository }) => {
      return {
        id: repo.node.id,
        name: repo.node.name,
        description: repo.node.description,
        url: repo.node.url,
      };
    });
    return repos;
  } catch (error) {
    console.error(error);
  }
}

export async function Projects() {
  const pinnedRepos = await fetchRepos();

  return (
    <div className="mt-16">
      <h1 className="text-xl text-[#ffffff]">projects</h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-10 mt-6">
        {pinnedRepos?.map((repo: Repository) => (
          <a href={repo.url} target="_blank" rel="noopener noreferrer" key={repo.id}>
            <h1 className="text-[#ffffff] underline">{repo.name}</h1>
            <p className="mt-3 text-[#adadad] text-sm">{repo.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
