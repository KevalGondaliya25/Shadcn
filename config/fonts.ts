import { Fira_Code as FontMono, Inter as FontSans, DM_Serif_Display as DMSerifDisplay, Questrial } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontDMSerifDisplay = DMSerifDisplay({
  subsets: ["latin"],
  weight: "400"
});

export const QuestrialDisplay = Questrial({
  subsets: ["latin"],
  weight: "400"
});
