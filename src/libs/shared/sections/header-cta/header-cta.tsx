import {
  Button,
  ButtonTypes,
  Dropdown,
  Grid,
  Text,
  TextTypes,
} from "../../components";
import styles from "./header-cta.module.scss";

export const HeaderCta = () => {
  return (
    <div className={styles["header-cta-wrapper"]}>
      <Grid>
        <section className={styles["header-cta"]}>
          <Text type={TextTypes["14r"]}>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </Text>

          <Button
            onClick={() => {}}
            type={ButtonTypes.text}
            className={styles["header-cta__link"]}
          >
            Shop Now!
          </Button>

          <Dropdown />
        </section>
      </Grid>
    </div>
  );
};
