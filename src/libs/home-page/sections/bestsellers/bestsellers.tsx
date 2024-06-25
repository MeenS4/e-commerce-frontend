import {
  Button,
  ButtonTypes,
  ButtonVariants,
  Grid,
  SectionHeading,
} from "../../../shared/components";
import { ProductCard } from "../../../shared/components/product-card";
import styles from "./bestsellers.module.scss";

const BESTSELLERS = [
  {
    title: "The north coat",
    price: 260,
    discountPrice: 360,
    numberOfRatings: 65,
    rating: 5,
    imgSrc: "/assets/images/product.png",
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
];

export const Bestsellers = () => {
  return (
    <section className={styles["bestsellers"]}>
      <Grid>
        <SectionHeading
          className={styles["bestsellers__heading"]}
          title="Best Selling Products"
          subTitle="This Month"
        />

        <Button
          className={styles["bestsellers__button"]}
          type={ButtonTypes.default}
          variant={ButtonVariants.primary}
          onClick={() => {}}
        >
          View All
        </Button>

        <div className={styles["bestsellers__products"]}>
          {BESTSELLERS.map((product) => (
            <ProductCard
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
      </Grid>
    </section>
  );
};
