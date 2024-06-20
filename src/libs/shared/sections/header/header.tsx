import { Grid } from "../../components";
import { Heading, HeadingTypes } from "../../components/heading";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <Grid>
      <header className={styles["header"]}>
        <Heading type={HeadingTypes["24b"]}>Exclusive</Heading>
      </header>
    </Grid>
  );
};
