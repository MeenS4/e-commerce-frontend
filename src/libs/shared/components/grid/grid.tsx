import { ReactNode } from "react";
import styles from "./grid.module.scss";

export const Grid = ({ children }: { children: ReactNode }) => {
  return <div className={styles["grid"]}>{children}</div>;
};
