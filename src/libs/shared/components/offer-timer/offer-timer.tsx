import classNames from "classnames";
import { Heading, HeadingTypes } from "../heading";
import { Text, TextTypes } from "../text";
import styles from "./offer-timer.module.scss";
import { TimeUnitProps, TimeUnitTypes } from "./offer.timer.types";

const Semicolon = () => {
  return (
    <div className={styles["semicolon"]}>
      <div className={styles["semicolon__element"]} />

      <div className={styles["semicolon__element"]} />
    </div>
  );
};

const TimeUnit = ({ unit, value }: TimeUnitProps) => {
  return (
    <div className={styles["time-unit"]}>
      <Text type={TextTypes["12m"]}>{unit.toString()}</Text>

      <Heading type={HeadingTypes["32b"]}>{value}</Heading>
    </div>
  );
};

export const OfferTimer = ({ className }: { className?: string }) => {
  const timerClassNames = classNames(styles["offer-timer"], className);

  return (
    <div className={timerClassNames}>
      <TimeUnit unit={TimeUnitTypes.days} value={"03"} />
      <Semicolon />

      <TimeUnit unit={TimeUnitTypes.hours} value={"23"} />
      <Semicolon />

      <TimeUnit unit={TimeUnitTypes.minutes} value={"19"} />
      <Semicolon />

      <TimeUnit unit={TimeUnitTypes.seconds} value={"56"} />
    </div>
  );
};
