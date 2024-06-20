import classNames from "classnames";
import styles from "./heading.module.scss";
import { HeadingProps } from "./heading.types";

export const Heading = ({ children, type, color, className }: HeadingProps) => {
  const headingClassNames = classNames(
    styles["heading"],
    styles[`heading--${type}`],
    className
  );

  return (
    <p className={headingClassNames} style={{ color }}>
      {children}
    </p>
  );
};
