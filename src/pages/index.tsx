import dynamic from "next/dynamic";
import "twin.macro";

import { Static } from "@/components/glitch";
import Copy from "@/components/copy";
import Offering from "@/components/offering";

const Glitch = dynamic(() => import(`../components/glitch`));

export default function Home() {
  return (
    <>
    <div tw="bg-black w-full flex justify-center h-[18.75rem] lg:(h-[25rem]) xl:(h-[32.8125rem]) 2xl:(h-[40rem])">
      <section tw="relative w-full h-[fit-content] flex justify-center">
        <div tw="absolute z-[-1]">
          <Static />
        </div>
        <Glitch />
      </section>
    </div>
    <Copy />
    <Offering />
    </>
  );
}
