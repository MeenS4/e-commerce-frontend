import { MutableRefObject, useRef } from "react";
import { ProductCategory } from "../../../home-page";
import {
  ControlButtonTypes,
  Grid,
  ScrollControls,
  SectionHeading,
} from "../../components";
import styles from "./browse-by-category.module.scss";

const PRODUCT_CATEGORIES = [
  {
    title: "Phones",
    iconSrc: "smartphone",
  },
  {
    title: "Computers",
    iconSrc: "desktop",
  },
  {
    title: "Smartwaches",
    iconSrc: "smartwatch",
  },
  {
    title: "Headphones",
    iconSrc: "headphones",
  },
  {
    title: "Gaming",
    iconSrc: "gaming-console",
  },
  {
    title: "Phones",
    iconSrc: "smartphone",
  },
  {
    title: "Computers",
    iconSrc: "desktop",
  },
  {
    title: "Smartwaches",
    iconSrc: "smartwatch",
  },
];

export const BrowseByCategory = () => {
  const scrollPanelRef: MutableRefObject<any> = useRef(null);

  const handleScrollControlsClick = (buttonType: ControlButtonTypes) => {
    if (buttonType === ControlButtonTypes.next) {
      scrollPanelRef.current.scrollLeft += 100;
    } else {
      scrollPanelRef.current.scrollLeft -= 100;
    }
  };

  return (
    <section className={styles["browse"]}>
      <Grid>
        <SectionHeading
          className={styles["browse__section-heading"]}
          title="Browse By Category"
          subTitle="Categories"
        />

        <div className={styles["browse__categories"]} ref={scrollPanelRef}>
          {PRODUCT_CATEGORIES.map((category) => {
            const { title, iconSrc } = category;

            return (
              <ProductCategory
                title={title}
                iconSrc={`components/${iconSrc}.svg`}
              />
            );
          })}
        </div>

        <ScrollControls
          onClick={handleScrollControlsClick}
          className={styles["browse__controls"]}
        />
      </Grid>
    </section>
  );
};
