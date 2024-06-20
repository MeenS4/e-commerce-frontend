import { ReactNode } from "react";
import styles from "./grid.module.scss";
import classNames from "classnames";

export const Grid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const gridClassNames = classNames(styles["grid"], className);

  return <div className={gridClassNames}>{children}</div>;
};
