import Image from "next/image";
import "twin.macro";

import { Wrapper } from "@/styles/common";

const Copy = () => (
  <div tw="w-full bg-black py-10 md:(py-12)">
  <Wrapper tw="flex flex-col items-center space-y-5 md:(space-y-9)">
    <div tw="flex flex-col items-center space-y-5 md:(space-y-9) xl:(flex-row space-x-2.5)">
      <div tw="xl:(w-[46%])">
        <p tw="font-sans font-bold text-white text-sm leading-[24px] md:(text-lg leading-[28px]) lg:(text-2xl)">
          <span tw="font-display text-lg text-red-100 md:(text-xl) lg:(text-3xl)">YUM YUM BLOODGUN</span> is a fast-paced, 2-player fighting game that merges high skill combat with roguelike deckbuilder mechanics, in which you build your character as you fight.
        </p>
        <div tw="xl:(hidden)">
          <Image src="/images/gifs/character-promo.gif" width={1232} height={686} alt="Pixelated character from YumYum Bloodgun" loading="lazy" />
        </div>
        <p tw="font-sans font-bold text-white text-sm leading-[24px] mt-5 md:(text-base mt-9) lg:(text-xl)">
          Shoot, parry, and slash your way to victory in a unique Alchemypunk setting -- when you fall, modify your moveset with powerups and jump into the next round.
        </p>
      </div>
      <div tw="hidden xl:(flex -mr-16 w-[53%]) 2xl:(-mr-24)">
          <Image src="/images/gifs/character-promo.gif" width={1232} height={686} alt="Pixelated character from YumYum Bloodgun" loading="lazy" />
      </div>
    </div>
    <p tw="font-sans font-bold text-white text-sm leading-[24px] md:(text-base) lg:(text-xl px-10) xl:(px-16 pt-12 pb-20)">
      Rollback netcode offers a seamless experience and ensures competitive integrity when fighting online -- or just duel it out in local play, where you can look your opponent in the eye before you end them.
    </p>
  </Wrapper>
  </div>
);

export default Copy;
