import type { AppProps } from "next/app";

import GlobalStyles from "@/styles/global";
import { alte } from "@/utils/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <main className={`${alte.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
};
