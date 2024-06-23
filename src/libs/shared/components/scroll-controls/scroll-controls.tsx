import classNames from "classnames";
import { Icon } from "../icon";
import styles from "./scroll-controls.module.scss";
import {
  ControlButtonProps,
  ControlButtonTypes,
  ScrollControlsProps,
} from "./scroll-controls.types";

const ControlButton = ({ onClick, type }: ControlButtonProps) => {
  if (type === ControlButtonTypes.next) {
    return (
      <div onClick={() => onClick(type)} className={styles["button"]}>
        <Icon
          className={styles["button__icon"]}
          src="components/arrow-right.svg"
          alt="next icon"
        />
      </div>
    );
  } else {
    return (
      <div onClick={() => onClick(type)} className={styles["button"]}>
        <Icon
          className={styles["button__icon"]}
          src="components/arrow-left.svg"
          alt="go back icon"
        />
      </div>
    );
  }
};

export const ScrollControls = ({ onClick, className }: ScrollControlsProps) => {
  const controlsClassNames = classNames(styles["controls"], className);
  return (
    <div className={controlsClassNames}>
      <ControlButton onClick={onClick} type={ControlButtonTypes.back} />

      <ControlButton onClick={onClick} type={ControlButtonTypes.next} />
    </div>
  );
};
