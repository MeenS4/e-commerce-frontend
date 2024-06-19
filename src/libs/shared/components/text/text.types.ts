import { ReactNode } from "react";

export enum TextTypes {
  "12r" = "12r",
  "12m" = "12m",
  "12sb" = "12sb",
  "14r" = "14r",
  "14m" = "14m",
  "14sb" = "14sb",
  "16r" = "16r",
  "16m" = "16m",
  "16sb" = "16sb",
  "20r" = "20r",
  "20m" = "20m",
  "20sb" = "20sb",
  "24r" = "24r",
  "24m" = "24m",
  "24sb" = "24sb",
}

export type TextProps = {
  children: ReactNode | string;
  type: TextTypes;
  color?: string;
  classname?: string;
};
