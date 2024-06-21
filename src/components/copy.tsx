import Image from "next/image";
import "twin.macro";

import { Wrapper } from "@/styles/common";

const Copy = () => (
  <section tw="w-full bg-black py-10 md:(py-12)">
    <Wrapper tw="flex flex-col items-center space-y-5 md:(space-y-9)">
      <div tw="flex flex-col items-center space-y-5 md:(space-y-9) xl:(flex-row space-x-2.5)">
        <div tw="xl:(w-[44%])">
          <p tw="font-sans font-bold text-white text-sm leading-[24px] md:(text-lg leading-[28px]) lg:(text-2xl)">
            Shoot, parry, and slash your way to self-awareness in the alchemy-infused dystopia of Yum Yum Bloodgun, a 2D fighting game with deckbuilding mechanics and wild art — featuring high-stakes duels and highly customizable fighters.
          </p>
          <div tw="xl:(hidden)">
            <Image src="/images/gifs/character-promo.gif" width={1232} height={686} alt="Pixelated character from YumYum Bloodgun" loading="lazy" />
          </div>
        </div>
        <div tw="hidden xl:(flex -mr-16 w-[53%]) 2xl:(-mr-24)">
          <Image src="/images/gifs/character-promo.gif" width={1232} height={686} alt="Pixelated character from YumYum Bloodgun" loading="lazy" />
        </div>
      </div>
      <p tw="font-sans font-bold text-white text-sm leading-[24px] md:(text-base) lg:(text-xl px-10) xl:(px-16 pt-12 pb-20)">
        Rollback netcode offers a seamless experience and ensures competitive integrity when fighting online -- or just duel it out in local play, where you can look your opponent in the eye before you end them.
      </p>
    </Wrapper>
  </section>
);

export default Copy;
