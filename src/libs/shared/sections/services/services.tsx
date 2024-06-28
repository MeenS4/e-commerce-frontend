import { Grid, SiteService } from "../../../shared/components";
import styles from "./services.module.scss";

export const Services = () => {
  return (
    <section className={styles["services"]}>
      <Grid>
        <div className={styles["services__list"]}>
          <SiteService
            title="FREE AND FAST DELIVERY"
            desc="Free delivery for all orders over $140"
            iconSrc="components/delivery.svg"
          />

          <SiteService
            title="24/7 CUSTOMER SERVICE"
            desc="Friendly 24/7 customer support"
            iconSrc="components/customer-service.svg"
          />

          <SiteService
            title="MONEY BACK GUARANTEE"
            desc="We return money within 30 days"
            iconSrc="components/security.svg"
          />
        </div>
      </Grid>
    </section>
  );
};
