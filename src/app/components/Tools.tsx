import Image from "next/image";
import Link from "next/link";

const technologies = [
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
    name: "Supabase",
    imgSrc: "/supabaseLogo.svg",
    https: "https://supabase.com/",
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
];

export function Tools() {
  return (
    <div className="flex flex-col font-geist">
      <h1 className="mt-16 text-xl text-[#ffffff]">tools</h1>
      <div className="flex items-center gap-5 mt-6 w-fit">
        {technologies.map((technology) => (
          <Link key={technology.name} href={technology.https} title={technology.name} target="_blank" rel="noopener noreferrer">
            <Image src={technology.imgSrc} alt={technology.name} width={28} height={28} />
          </Link>
        ))}
      </div>
    </div>
  );
}
