import "twin.macro";

import YumYum from "./yumyum";
import { Wrapper } from "@/styles/common";

const Header = () => {
  return (
    <header tw="w-full bg-black">
      <Wrapper tw="flex flex-col items-center justify-center py-8 md:(flex-row space-x-2.5 py-14) xl:(py-20)">
        <div tw="flex w-[81%] md:(mb-4 w-[55%]) 2xl:(w-[62%] mb-6)">
          <YumYum />
        </div>
        <h1 tw="text-red-100 font-display font-semi text-[86px] leading-[70px] md:(text-[96px] leading-[80px]) xl:(text-[180px] leading-[180px])">BLOODGUN</h1>
      </Wrapper>
    </header>
  );
};

export default Header;
