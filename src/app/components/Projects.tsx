"use client";

import { Repo } from "@/types";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { getPinnedRepos } from "../actions/getPinnerRepos";

export function Projects() {
  const {
    data: pinnedRepos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["pinnedRepos"],
    queryFn: () => getPinnedRepos(),
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  if (isLoading) {
    return <div>Loading...</div>; // Optionally add a loading state
  }

  if (isError) {
    return <div>Error fetching pinned repositories.</div>; // Handle errors
  }

  return (
    <div className="fle flex-col gap-2">
      <h1 className="text-xl text-[#ffffff]">some projects</h1>
      <div className="grid grid-cols-3 grid-rows- gap-10 mt-6">
        {pinnedRepos?.map((repo: Repo) => (
          <Link href={repo.url} target="_blank" rel="noopener noreferrer" key={repo.id}>
            <h1
              className="text-[#ffffff] underline truncate"
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {repo.name}
            </h1>
            <p className="mt-3 text-[#adadad] text-sm">{repo.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
