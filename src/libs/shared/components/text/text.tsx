import classNames from "classnames";
import styles from "./text.module.scss";
import { TextProps } from "./text.types";

export const Text = ({ children, type, color, classname }: TextProps) => {
  const textClassNames = classNames(
    styles["text"],
    styles[`text--${type}`],
    classname
  );

  return (
    <p className={textClassNames} style={{ color }}>
      {children}
    </p>
  );
};
