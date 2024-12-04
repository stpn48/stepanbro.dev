import { Link } from "@/app/components/Link";

const links = [
  { url: "https://github.com/stpn48", name: "github" },
  { url: "mailto:stpnbrozbusiness@gmail.com", name: "contact" },
  { url: "https://www.instagram.com/stepanbroz1", name: "instagram" },
];

export function Links() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl text-[#ffffff]">links</h1>
      <div className="mt-4 flex gap-10 text-[#adadad]">
        {links.map((link) => (
          <Link key={link.url} link={link} />
        ))}
      </div>
    </div>
  );
}
