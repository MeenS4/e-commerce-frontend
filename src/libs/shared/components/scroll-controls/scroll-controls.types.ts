export enum ControlButtonTypes {
  "next" = "next",
  "back" = "back",
}

export type ControlButtonProps = {
  onClick: Function;
  type: ControlButtonTypes;
};

export type ScrollControlsProps = {
  onClick: Function;
  className?: string;
};
