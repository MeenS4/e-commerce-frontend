export enum ControlButtonTypes {
  "next" = "next",
  "back" = "back",
}

export type ControlButtonProps = {
  type: ControlButtonTypes;
};

export type ScrollControlsProps = {
  className?: string;
};
