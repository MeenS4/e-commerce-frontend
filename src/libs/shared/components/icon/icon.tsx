import classNames from "classnames";
import styles from "./icon.module.scss";
import { IconProps } from "./icon.types";

export const Icon = ({ src, alt, className }: IconProps) => {
  const iconClassNames = classNames(styles["icon"], className);

  return (
    <img className={iconClassNames} src={`assets/icons/${src}`} alt={alt} />
  );
};
