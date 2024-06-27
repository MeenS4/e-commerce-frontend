import { DiscountBadge } from "../discount-badge";
import { Icon } from "../icon";
import { ProductRating } from "../product-rating";
import { Text, TextTypes } from "../text";
import styles from "./product-card.module.scss";
import { ProductCardProps } from "./product-card.types";

const ProductPricing = ({
  price,
  outdatedPrice,
}: {
  price: number;
  outdatedPrice?: number;
}) => {
  return (
    <div className={styles["product-pricing"]}>
      <Text
        className={styles["product-pricing__price"]}
        type={TextTypes["16m"]}
      >
        {`$${price}`}
      </Text>

      {outdatedPrice ? (
        <Text
          className={styles["product-pricing__outdated-price"]}
          type={TextTypes["16m"]}
        >
          {`$${outdatedPrice}`}
        </Text>
      ) : null}
    </div>
  );
};

export const ProductCard = ({ product }: ProductCardProps) => {
  //retrieve data from product object
  const { title, rating, numberOfRatings, price, imgSrc, discountPrice } =
    product;

  return (
    <div className={styles["product-card"]}>
      <div className={styles["product-card__image-section"]}>
        {/* product image */}
        <img
          className={styles["product-card__image-section__image"]}
          src={imgSrc}
          alt="product"
        />

        {discountPrice ? (
          <DiscountBadge
            discountPercent={Math.round(
              ((discountPrice - price) / discountPrice) * 100
            )}
          />
        ) : null}

        {/* action icons */}
        <div className={styles["product-card__image-section__icons"]}>
          <Icon src="components/favorite.svg" alt="favorite" />

          <Icon src="components/eye.svg" alt="eye icon" />
        </div>
      </div>

      <div className={styles["product-card__info"]}>
        <Text
          type={TextTypes["16m"]}
          className={styles["product-card__info__title"]}
        >
          {title}
        </Text>

        <ProductPricing price={price} outdatedPrice={discountPrice} />

        <ProductRating rating={rating} numberOfRatings={numberOfRatings} />
      </div>
    </div>
  );
};
