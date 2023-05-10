import Link from "next/link";
import "twin.macro";

import YumYum from "./yumyum";
import Bloodgun from "./bloodgun";
import { Wrapper } from "@/styles/common";

const Header = () => {
  return (
    <header tw="w-full bg-black">
      <Link href="/" prefetch={false}>
        <Wrapper tw="flex flex-col items-center justify-center py-8 md:(flex-row space-x-2.5 py-14) xl:(py-20)">
          <div tw="flex w-[81%] md:(mb-4 w-[55%]) 2xl:(w-[52%] mb-6)">
            <YumYum />
          </div>
          <div tw="w-[80%] md:(w-[44%]) 2xl:(w-[41%])">
            <Bloodgun />
          </div>
        </Wrapper>
      </Link>
    </header>
  );
};

export default Header;
