import { Grid } from "../grid";
import styles from "./divider.module.scss";

export const Divider = ({ isFullWidth }: { isFullWidth?: boolean }) => {
  if (isFullWidth) {
    return <div className={styles["divider"]} />;
  } else {
    return (
      <Grid>
        <div className={styles["divider"]} />
      </Grid>
    );
  }
};
