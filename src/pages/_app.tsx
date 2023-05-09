import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import "twin.macro";

import Header from "@/components/header";
import GlobalStyles from "@/styles/global";
import { alte, built } from "@/utils/fonts";

import config from "next-seo.config";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo {...config} />
      <GlobalStyles />
      <main className={`${alte.variable} ${built.variable}`} tw="w-screen min-h-screen flex flex-col overflow-hidden antialiased">
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  );
};
