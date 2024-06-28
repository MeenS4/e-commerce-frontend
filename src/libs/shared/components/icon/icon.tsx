import classNames from "classnames";
import styles from "./icon.module.scss";
import { IconProps } from "./icon.types";

export const Icon = ({ src, alt, onClick, className }: IconProps) => {
  const iconClassNames = classNames(styles["icon"], className, {
    [styles["icon--clickable"]]: onClick,
  });

  if (onClick !== null) {
    return (
      <img
        className={iconClassNames}
        src={`assets/icons/${src}`}
        alt={alt}
        onClick={onClick}
      />
    );
  } else {
    return (
      <img className={iconClassNames} src={`assets/icons/${src}`} alt={alt} />
    );
  }
};
