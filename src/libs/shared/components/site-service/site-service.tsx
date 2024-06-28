import { Icon } from "../icon";
import { Text, TextTypes } from "../text";
import styles from "./site-service.module.scss";

export const SiteService = ({
  title,
  desc,
  iconSrc,
}: {
  title: string;
  desc: string;
  iconSrc: string;
}) => {
  return (
    <div className={styles["service"]}>
      <div className={styles["service__icon-wrapper"]}>
        <Icon
          className={styles["service__icon-wrapper__icon"]}
          src={iconSrc}
          alt="service"
        />

        <Icon
          className={styles["service__icon-wrapper__background"]}
          src="components/service-background.svg"
          alt="service background"
        />
      </div>

      <Text className={styles["service__title"]} type={TextTypes["20sb"]}>
        {title}
      </Text>

      <Text className={styles["service__title"]} type={TextTypes["14r"]}>
        {desc}
      </Text>
    </div>
  );
};
