import { ReactNode } from "react";

export enum HeadingTypes {
  "110b" = "110b",
  "110sb" = "110sb",
  "110m" = "110m",
  "110r" = "110r",
  "90b" = "90b",
  "90sb" = "90sb",
  "90m" = "90m",
  "90r" = "90r",
  "64b" = "64b",
  "64sb" = "64sb",
  "64m" = "64m",
  "64r" = "64r",
  "54b" = "54b",
  "54sb" = "54sb",
  "54m" = "54m",
  "54r" = "54r",
  "48b" = "48b",
  "48sb" = "48sb",
  "48m" = "48m",
  "48r" = "48r",
  "36b" = "36b",
  "36sb" = "36sb",
  "36m" = "36m",
  "36r" = "36r",
  "32b" = "32b",
  "32sb" = "32sb",
  "32m" = "32m",
  "32r" = "32r",
  "24b" = "24b",
  "24sb" = "24sb",
  "24m" = "24m",
  "24r" = "24r",
  "20b" = "20b",
  "20sb" = "20sb",
  "20m" = "20m",
  "20r" = "20r",
}

export type HeadingProps = {
  children: ReactNode | string;
  type: HeadingTypes;
  color?: string;
  className?: string;
};
