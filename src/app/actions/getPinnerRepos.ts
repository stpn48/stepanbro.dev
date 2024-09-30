// src/app/actions/getPinnedRepos.ts

"use server";

import { Repository } from "@/types";

const query = `{
  user(login: "stpn48") {
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

export async function getPinnedRepos() {
  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    });

    const { data } = await res.json();

    const repos = data.user.pinnedItems.edges.map((repo: Repository) => ({
      id: repo.node.id,
      name: repo.node.name,
      description: repo.node.description,
      url: repo.node.url,
    }));

    return repos;
  } catch (error) {
    console.error("Error fetching pinned repos:", error);
    return [];
  }
}
