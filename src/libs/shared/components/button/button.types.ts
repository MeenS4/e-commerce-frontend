import { ReactNode } from "react";

export enum ButtonTypes {
  "default" = "default",
  "outlined" = "outlined",
  "text" = "text",
}

export enum ButtonVariants {
  "primary" = "primary",
  "secondary" = "secondary",
}

export type ButtonProps = {
  children: ReactNode | string;
  onClick: Function;
  type: ButtonTypes;
  variant?: ButtonVariants;
  className?: string;
};
