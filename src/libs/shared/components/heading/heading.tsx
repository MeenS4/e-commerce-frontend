import classNames from "classnames";
import styles from "./heading.module.scss";
import { HeadingProps } from "./heading.types";

export const Heading = ({ children, type, color, classname }: HeadingProps) => {
  const headingClassNames = classNames(
    styles["heading"],
    styles[`heading--${type}`],
    classname
  );

  return (
    <p className={headingClassNames} style={{ color }}>
      {children}
    </p>
  );
};
