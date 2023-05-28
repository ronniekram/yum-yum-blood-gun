import Link from "next/link";
import tw, { styled } from "twin.macro";
import { FiTwitter, FiTwitch, FiMail } from "react-icons/fi";

import Newsletter from "./newsletter";
import { Wrapper } from "@/styles/common";

const A = styled.a`
  ${tw`w-11 h-11 rounded-full`};
  ${tw`bg-red-300 text-white`};
  ${tw`flex items-center justify-center`};
  ${tw`transition duration-300 ease-in-out`};
  ${tw`hover:(bg-red-200)`};
`;

const linkStyle = [
  tw`text-[44px] leading-[44px] text-red-100 font-display font-semi`,
  tw`transition duration-300 ease-in-out`,
  tw`hover:(text-red-300)`,
  tw`xl:(text-[56px] leading-[56px])`,
];

const Icon = ({ name }: { name: `twitter` | `twitch` | `mail` }) => {
  return name === `twitter` ? (
    <A href="https://twitter.com/goblindelight" target="_blank" rel="noreferrer" aria-label="Twitter">
      <FiTwitter size="24" />
    </A>
  ) : name=== `mail` ? (
    <A href="mailto:press@goblindelight.com" target="_blank" rel="noreferrer" aria-label="Press Email">
      <FiMail size={24} />
    </A>
  ) :
  (
    <A href="https://twitch.tv/cobgoblin" target="_blank" rel="noreferrer" aria-label="Twitch">
      <FiTwitch size="24" />
    </A>
  );
};

const Footer = () => (
  <footer tw="w-full bg-black text-white pt-12 pb-6 md:(pt-16 pb-8) lg:(pt-20 pb-12)">
    <Wrapper tw="flex flex-col space-y-12 md:(flex-row-reverse justify-between space-y-0 h-[9.375rem])">
      <div tw="w-full max-w-[23rem] flex flex-col space-y-8 justify-start md:(h-full justify-between space-y-0)">
        <Newsletter />
        <div tw="flex space-x-4">
          <Icon name="twitch" />
          <Icon name="twitter" />
          <Icon name="mail" />
        </div>
      </div>

      <div tw="w-full flex flex-col space-y-4 md:(h-full space-y-0 justify-between)">
        <Link href="/privacy" prefetch={false} css={linkStyle}>
          Privacy Policy
        </Link>
        <p tw="text-white font-sans">© 2020 - {new Date().getFullYear()} Goblin Delight LLC</p>
      </div>
    </Wrapper>
  </footer>
);

export default Footer;
