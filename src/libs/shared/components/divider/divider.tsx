import { Grid } from "../grid";
import styles from "./divider.module.scss";

export const Divider = () => {
  return (
    <Grid>
      <div className={styles["divider"]} />
    </Grid>
  );
};
