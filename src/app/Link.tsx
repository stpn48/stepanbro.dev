type Props = {
  link: { url: string; name: string };
};

export function Link({ link }: Props) {
  return (
    <a className="flex hover:text-[#ffffff]" href={link.url} target="_blank">
      <p className="">{link.name}</p>
      <svg
        className="ml-1"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 7h10v10"></path>
        <path d="M7 17 17 7"></path>
      </svg>
    </a>
  );
}
