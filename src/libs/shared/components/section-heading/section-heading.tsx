import { Heading, HeadingTypes } from "../heading";
import { Text, TextTypes } from "../text";
import styles from "./section-heading.module.scss";
import { SectionHeadingProps } from "./section-heading.types";

export const SectionHeading = ({ title, subTitle }: SectionHeadingProps) => {
  return (
    <div className={styles["section-heading"]}>
      <div className={styles["section-heading__category-rect"]} />

      <Text
        className={styles["section-heading__sub-title"]}
        type={TextTypes["16sb"]}
      >
        {subTitle}
      </Text>

      <Heading
        className={styles["section-heading__title"]}
        type={HeadingTypes["36sb"]}
      >
        {title}
      </Heading>
    </div>
  );
};
