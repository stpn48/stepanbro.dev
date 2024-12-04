import { Tool } from "./Tool";

const tools = [
  {
    name: "Next.js",
    imgSrc: "/nextJsLogo.svg",
    https: "https://nextjs.org",
  },
  {
    name: "React",
    imgSrc: "/reactLogo.svg",
    https: "https://reactjs.org",
  },
  {
    name: "Tailwind",
    imgSrc: "/tailwindLogo.svg",
    https: "https://tailwindcss.com",
  },

  {
    name: "Typescript",
    imgSrc: "/tsLogo.svg",
    https: "https://www.typescriptlang.org",
  },
  {
    name: "Shadcn",
    imgSrc: "/shadcn-logo.svg",
    https: "https://ui.shadcn.com/",
  },
  {
    name: "AuthJS",
    imgSrc: "/auth-js-logo.svg",
    https: "https://authjs.dev/",
  },
  {
    name: "Supabase",
    imgSrc: "/supabaseLogo.svg",
    https: "https://supabase.com/",
  },
];

export function Tools() {
  return (
    <div className="flex flex-col gap-6 font-geist">
      <h1 className="text-xl text-[#ffffff]">tools</h1>
      <div className="flex items-center gap-4 w-fit">
        {tools.map((tool) => (
          <Tool key={tool.name} tool={tool} />
        ))}
      </div>
    </div>
  );
}
