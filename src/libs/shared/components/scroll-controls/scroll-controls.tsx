import { Icon } from "../icon";
import styles from "./scroll-controls.module.scss";
import {
  ControlButtonProps,
  ControlButtonTypes,
} from "./scroll-controls.types";

const ControlButton = ({ type }: ControlButtonProps) => {
  if (type === ControlButtonTypes.next) {
    return (
      <div className={styles["button"]}>
        <Icon
          className={styles["button__icon"]}
          src="components/arrow-right.svg"
          alt="next icon"
        />
      </div>
    );
  } else {
    return (
      <div className={styles["button"]}>
        <Icon
          className={styles["button__icon"]}
          src="components/arrow-left.svg"
          alt="go back icon"
        />
      </div>
    );
  }
};

export const ScrollControls = () => {
  return (
    <div className={styles["controls"]}>
      <ControlButton type={ControlButtonTypes.back} />

      <ControlButton type={ControlButtonTypes.next} />
    </div>
  );
};
