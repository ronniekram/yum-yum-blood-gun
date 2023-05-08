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
  variable: `--sans`,
});
