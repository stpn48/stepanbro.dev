import { AboutMe } from "@/app/components/AboutMe";
import { Links } from "@/app/components/Links";
import { Projects } from "@/app/components/Projects";
import { Tools } from "@/app/components/Tools";
import React from "react";

export default async function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] py-8 min-h-screen">
      <main className="max-w-2xl flex flex-col gap-[70px] p-4 mx-auto">
        <AboutMe />
        <Tools />
        <Projects />
        <Links />
      </main>
    </div>
  );
}
