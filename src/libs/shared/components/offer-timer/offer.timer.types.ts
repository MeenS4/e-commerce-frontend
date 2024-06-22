export enum TimeUnitTypes {
  "days" = "days",
  "hours" = "hours",
  "minutes" = "minutes",
  "seconds" = "seconds",
}

export type TimeUnitProps = {
  unit: TimeUnitProps | string;
  value: string;
};
