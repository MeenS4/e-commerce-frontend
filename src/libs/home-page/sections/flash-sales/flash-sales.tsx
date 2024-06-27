import { MutableRefObject, useRef } from "react";
import {
  Button,
  ButtonTypes,
  ButtonVariants,
  ControlButtonTypes,
  Grid,
  OfferTimer,
  ProductCard,
  ScrollControls,
  SectionHeading,
} from "../../../shared/components";
import styles from "./flash-sales.module.scss";

const FLASH_SALES = [
  {
    title: "The north coat",
    price: 260,
    discountPrice: 360,
    numberOfRatings: 65,
    rating: 5,
    imgSrc: "/assets/images/product.png",
  },
  {
    title: "RGB liquid CPU Cooler",
    price: 160,
    discountPrice: 170,
    numberOfRatings: 96,
    rating: 5,
    imgSrc: "/assets/images/cpu-cooler.png",
  },
  {
    title: "Small Bookshelf",
    price: 360,
    numberOfRatings: 12,
    rating: 5,
    imgSrc: "/assets/images/bookshelf.png",
  },
  {
    title: "Gucci duffle bag",
    price: 960,
    discountPrice: 1160,
    numberOfRatings: 32,
    rating: 4.5,
    imgSrc: "/assets/images/gucci-bag.png",
  },
  {
    title: "Gucci duffle bag",
    price: 960,
    discountPrice: 1160,
    numberOfRatings: 32,
    rating: 4.5,
    imgSrc: "/assets/images/gucci-bag.png",
  },
  {
    title: "Gucci duffle bag",
    price: 960,
    discountPrice: 1160,
    numberOfRatings: 32,
    rating: 4.5,
    imgSrc: "/assets/images/gucci-bag.png",
  },
];

export const FlashSales = () => {
  const productsListRef: MutableRefObject<any> = useRef(null);

  const handleScrollControlsClick = (direction: ControlButtonTypes) => {
    if (direction === ControlButtonTypes.next) {
      productsListRef.current.scrollLeft += 367.5;
    } else {
      productsListRef.current.scrollLeft -= 367.5;
    }
  };

  return (
    <section className={styles["flash-sales"]}>
      <Grid>
        <SectionHeading
          className={styles["flash-sales__section-heading"]}
          title="Flash Sales"
          subTitle="Today's"
        />

        <OfferTimer className={styles["flash-sales__timer"]} />

        <ScrollControls
          onClick={handleScrollControlsClick}
          className={styles["flash-sales__controls"]}
        />

        <div className={styles["flash-sales__products"]} ref={productsListRef}>
          {FLASH_SALES.map((product, i) => (
            <ProductCard
              key={`${product.title} ${i}`}
              product={{
                title: product.title,
                price: product.price,
                discountPrice: product.discountPrice,
                numberOfRatings: product.numberOfRatings,
                rating: product.rating,
                imgSrc: product.imgSrc,
              }}
            />
          ))}
        </div>

        <Button
          className={styles["flash-sales__cta"]}
          type={ButtonTypes.default}
          variant={ButtonVariants.primary}
          onClick={() => {}}
        >
          View All Products
        </Button>
      </Grid>
    </section>
  );
};
