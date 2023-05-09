/* eslint-disable quotes */
import localFont from "next/font/local";

export const alte = localFont({
  src: [
    {
      path: "../../public/fonts/alte/regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/alte/bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--sans",
});

export const built = localFont({
  src: [
    {
      path: "../../public/fonts/built-tilting/regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/built-tilting/semi-bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/built-tilting/bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--tilting",
});
