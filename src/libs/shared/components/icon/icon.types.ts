import { MouseEventHandler } from "react";

export type IconProps = {
  src: string;
  alt: string;
  onClick?: MouseEventHandler<HTMLElement>;
  className?: string;
};
