import { Button, ButtonTypes, Grid, SearchBar } from "../../components";
import { Heading, HeadingTypes } from "../../components/heading";
import { Icon } from "../../components/icon";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <Grid>
      <header className={styles["header"]}>
        <Heading type={HeadingTypes["24b"]}>Exclusive</Heading>

        <div className={styles["header__buttons"]}>
          <Button type={ButtonTypes.text} onClick={() => {}}>
            Home
          </Button>

          <Button type={ButtonTypes.text} onClick={() => {}}>
            Contact
          </Button>

          <Button type={ButtonTypes.text} onClick={() => {}}>
            About
          </Button>

          <Button type={ButtonTypes.text} onClick={() => {}}>
            Sign Up
          </Button>
        </div>

        <div className={styles["header__trailing"]}>
          <SearchBar />

          <div className={styles["header__trailing__actions"]}>
            <Icon src="components/shopping-cart.svg" alt="shopping cart" />

            <Icon src="components/wishlist.svg" alt="wishlist" />
          </div>
        </div>
      </header>
    </Grid>
  );
};
