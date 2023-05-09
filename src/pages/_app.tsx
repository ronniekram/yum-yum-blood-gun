import type { AppProps } from "next/app";
import "twin.macro";

import Header from "@/components/header";
import GlobalStyles from "@/styles/global";
import { alte, built } from "@/utils/fonts";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <main className={`${alte.variable} ${built.variable}`} tw="w-screen min-h-screen flex flex-col overflow-hidden antialiased">
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  );
};
