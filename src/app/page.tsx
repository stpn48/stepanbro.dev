import { Links } from "@/app/Links";
import { Projects } from "@/app/Projects";
import { TechnologiesUsing } from "@/app/TechnologiesUsing";
import Image from "next/image";
import React from "react";
import { Repository } from "@/types";
import { error } from "console";


export default async function Home() {


  return (
    <div className="font-[family-name:var(--font-geist-sans)] pt-8 min-h-screen bg-[#0a0a0a]">
      <main className="max-w-2xl p-4 mx-auto">
        <h1 className="mb-5 text-2xl text-[#ffffff]">stepan</h1>
        <p className="text-[16px] leading-[28px] text-[#adadad]">
          I'm 17 y/o high school student. I love building stuff and solving
          problems. I enjoy building beautiful interactive websites with next js.
          If im not coding im probably out in the sun, working out or reading.
        </p>
        <TechnologiesUsing />
        <Projects />
        <Links />
        <hr className="my-10 border-[#4e4e4e]" />
        <h3 className="text-[#adadad]">Štěpán Brož</h3>
      </main>
    </div>
  );
}
