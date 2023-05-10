import Image from "next/image";
import tw, { styled } from "twin.macro";

import { Wrapper } from "@/styles/common";

const H2 = styled.h2`
  ${tw`text-black font-display font-semi`};
  ${tw`text-[64px] leading-[60px]`};
  ${tw`md:(text-[80px] leading-[72px])`};
  ${tw`lg:(text-8xl leading-[90px]) `};
  ${tw`xl:(text-9xl leading-[100px])`};
  ${tw`2xl:(text-[140px] leading-[128px])`};
`;

const Offering = () => (
  <section tw="bg-red-100 w-full bg-cover bg-repeat-y py-12 px-0! md:(py-16) xl:(py-20)" css={[`background-image: url("/images/bg.svg");`]}>
    <Wrapper tw="flex flex-col space-y-6 md:(flex-row space-y-0 justify-between) lg:(items-end) xl:(space-x-6)">
      <div tw="flex flex-col space-y-6 lg:(space-y-4 lg:(self-start))">
        <H2>Pain is an offering;</H2>
        <div tw="max-w-[20.9375rem] mx-auto md:(hidden)">
          <Image src="/images/logo.png" width={563} height={578} loading="lazy" alt="YumYum Bloodgun logo" />
        </div>
        <H2>Death is a gift.</H2>
      </div>
      <div tw="hidden md:(block w-[27%] pt-16) lg:(w-[29%]) xl:(w-[32%]) 2xl:(w-[28%] pt-24)">
        <Image src="/images/logo.png" width={563} height={578} loading="lazy" alt="YumYum Bloodgun logo" />
      </div>

    </Wrapper>
  </section>
);

export default Offering;
