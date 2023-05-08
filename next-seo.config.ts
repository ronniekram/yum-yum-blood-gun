import type { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  title: `Yum Yum Blood Gun`,
  description: ``,
  canonical: `https://yumyum.cool/`,
  openGraph: {
    type: `website`,
    locale: `en_US`,
    url: `https://yumyum.cool/`,
    siteName: `Yum Yum Blood Gun`,
    images: [
      {
        url: ``,
        width: 1200,
        height: 630,
        alt: `Yum Yum Blood Gun`,
      },
    ],
  },
  twitter: {
    cardType: `summary_large_image`,
    site: `Yum Yum Blood Gun`,
    handle: `@goblindelight`,
  },
};
