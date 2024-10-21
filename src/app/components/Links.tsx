import { Link } from "@/app/components/Link";

const links = [
  { url: "https://www.instagram.com/stepanbroz1", name: "instagram" },
  { url: "https://github.com/stpn48", name: "github" },
  { url: "mailto:stpnbrozbusiness@gmail.com", name: "contact" },
];

export function Links() {
  return (
    <div className="mt-16">
      <h1 className="text-xl text-[#ffffff]">links</h1>
      <div className="mt-4 flex gap-10 text-[#adadad]">
        {links.map((link) => (
          <Link key={link.url} link={link} />
        ))}
      </div>
    </div>
  );
}
