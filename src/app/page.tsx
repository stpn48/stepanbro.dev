import { Links } from "@/app/components/Links";
import { Projects } from "@/app/components/Projects";
import { TechnologiesUsing } from "@/app/components/TechnologiesUsing";
import React from "react";

export default async function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] pt-8 min-h-screen bg-[#0a0a0a]">
      <main className="max-w-2xl p-4 mx-auto">
        <h1 className="mb-5 text-2xl text-[#ffffff]">stepan</h1>
        <p className="text-[16px] leading-[28px] text-[#adadad]">
          I&apos;m 17 y/o high school student. I love building stuff and solving problems. I enjoy building beautiful, interactive and optimized web apps with next js. If im not coding im probably out
          in the sun, working out or reading.
        </p>
        <TechnologiesUsing />
        <Projects />
        <Links />
        <hr className="my-10 border-[#3d3d3d]" />
        <h3 className="text-[#7e7e7e]">Štěpán Brož</h3>
      </main>
    </div>
  );
}
