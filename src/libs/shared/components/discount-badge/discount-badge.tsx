import { Text, TextTypes } from "../text";
import styles from "./discount-badge.module.scss";

export const DiscountBadge = ({
  discountPercent,
}: {
  discountPercent: number;
}) => {
  return (
    <div className={styles["discount-badge"]}>
      <Text type={TextTypes["12r"]}>-{discountPercent}%</Text>
    </div>
  );
};
