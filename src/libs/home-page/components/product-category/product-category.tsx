import styles from "./product-category.module.scss";

import { ProductCategoryProps } from "./product-category.types";
import { Icon, Text, TextTypes } from "../../../shared/components";

const CATEGORIES_ICONS = [
  "smartphone",
  "desktop",
  "smartwatch",
  "camera",
  "headphones",
  "gaming-console",
];

export const ProductCategory = ({ title, iconSrc }: ProductCategoryProps) => {
  return (
    <div className={styles["product-category"]}>
      <Icon
        className={styles["product-category__icon"]}
        src={iconSrc}
        alt="category icon"
      />

      <Text
        className={styles["product-category__title"]}
        type={TextTypes["16r"]}
      >
        {title}
      </Text>
    </div>
  );
};
