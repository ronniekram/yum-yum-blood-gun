import type { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  title: `YumYum Bloodgun`,
  description: `A fast-paced, 2-player fighting game that merges high skill combat with roguelike deckbuilder mechanics, in which you build your character as you fight.`,
  canonical: `https://yumyum.cool/`,
  openGraph: {
    type: `website`,
    locale: `en_US`,
    url: `https://yumyum.cool/`,
    siteName: `YumYum Bloodgun`,
    images: [
      {
        url: `https://raw.githubusercontent.com/ronniekram/yum-yum-blood-gun/main/public/opengraph.png`,
        width: 1200,
        height: 630,
        alt: `YumYum Bloodgun`,
      },
    ],
  },
  twitter: {
    cardType: `summary_large_image`,
    site: `YumYum Bloodgun`,
    handle: `@goblindelight`,
  },
};

export default config;
