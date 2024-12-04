import { Links } from "@/app/components/Links";
import { Projects } from "@/app/components/Projects";
import { Tools } from "@/app/components/Tools";
import React from "react";

export default async function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] py-8 min-h-screen">
      <main className="max-w-2xl p-4 mx-auto">
        <h1 className="mb-5 text-2xl text-[#ffffff]">stepan</h1>
        <p className="text-[16px] leading-[28px] text-[#adadad]">I build fast and beautiful stuff with next.js</p>
        <Tools />
        <Projects />
        <Links />
      </main>
    </div>
  );
}
