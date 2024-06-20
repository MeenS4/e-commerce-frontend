import styles from "./button.module.scss";

import { MouseEventHandler } from "react";

import { ButtonProps, ButtonTypes, ButtonVariants } from "./button.types";
import classNames from "classnames";

export const Button = ({
  children: label,
  type = ButtonTypes.default,
  variant = ButtonVariants.primary,
  onClick,
  className,
}: ButtonProps) => {
  const buttonClassNames = classNames(
    styles["button"],
    styles[`button--${type}`],
    styles[`button--${type}--${variant}`],
    className
  );

  return (
    <div className={buttonClassNames} onClick={onClick as MouseEventHandler}>
      {label}
    </div>
  );
};
