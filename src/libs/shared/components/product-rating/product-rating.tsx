import { ReactNode } from "react";
import styles from "./product-rating.module.scss";
import { ProductRatingProps } from "./product-rating.types";
import { Icon } from "../icon";
import { Text, TextTypes } from "../text";

export const ProductRating = ({
  rating,
  numberOfRatings,
}: ProductRatingProps) => {
  const renderRatingStars = (rating: number) => {
    let isRatingEven = Number.isInteger(rating); //Flag to check either rating is even or not. Used later to indicate if "half star" should be generated.

    let flooredRating = Math.floor(rating); //Contains floored rating | rating = 3.5; flooredRating = 3.0; etc.

    let finalRender: [ReactNode] = [null]; //Variable to output later when all stars are generated

    //If check to update isRatingEven flag

    //Render all full stars
    for (let i = 0; i < flooredRating; i++) {
      finalRender.push(
        <Icon
          key={`fullstar ${i}`}
          className={styles["rating__stars__star"]}
          src="components/star.svg"
          alt="star"
        />
      );
    }

    //If rating is uneven (3.5 , 2.5 etc.) render a half star icon
    if (!isRatingEven) {
      finalRender.push(
        <Icon
          key={`halfstar`}
          className={styles["rating__stars__star"]}
          src="components/half-star.svg"
          alt="star"
        />
      );
    }

    //Helper variable to check how many empty stars should be rendered if any
    let emptyStarsNumber = 5;

    if (isRatingEven) emptyStarsNumber = 5 - flooredRating;
    else emptyStarsNumber -= flooredRating + 1;

    for (let i = 0; i < emptyStarsNumber; i++) {
      finalRender.push(
        <Icon
          key={`emptystar ${i}`}
          className={styles["rating__stars__star"]}
          src="components/empty-star.svg"
          alt="star"
        />
      );
    }

    return finalRender;
  };

  let stars = renderRatingStars(rating);

  return (
    <div className={styles["rating"]}>
      <div className={styles["rating__stars"]}>{stars}</div>

      <Text className={styles["rating__number"]} type={TextTypes["14sb"]}>
        ({numberOfRatings})
      </Text>
    </div>
  );
};
