import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  tool: {
    name: string;
    imgSrc: string;
    https: string;
  };
};

export function Tool({ tool }: Props) {
  return (
    <TooltipProvider delayDuration={400}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link key={tool.name} href={tool.https} target="_blank" rel="noopener noreferrer">
            <Image src={tool.imgSrc} alt={tool.name} width={28} height={28} />
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tool.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
