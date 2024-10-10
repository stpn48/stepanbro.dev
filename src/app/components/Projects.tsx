"use client";

import { Repo } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { getPinnedRepos } from "../actions/getPinnerRepos";
import { useEffect } from "react";

export async function Projects() {
  const {
    data: pinnedRepos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["pinnedRepos"],
    queryFn: () => getPinnedRepos(),
    staleTime: 1000 * 60 * 10 * 6 * 12,
  });

  if (isLoading) {
    return <div>Loading...</div>; // Optionally add a loading state
  }

  if (isError) {
    return <div>Error fetching pinned repositories.</div>; // Handle errors
  }

  return (
    <div className="mt-16">
      <h1 className="text-xl text-[#ffffff]">projects</h1>
      <div className="grid grid-cols-3 grid-rows- gap-10 mt-6">
        {pinnedRepos?.map((repo: Repo) => (
          <a href={repo.url} target="_blank" rel="noopener noreferrer" key={repo.id}>
            <h1 className="text-[#ffffff] underline">{repo.name}</h1>
            <p className="mt-3 text-[#adadad] text-sm">{repo.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
