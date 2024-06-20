import { Icon } from "../icon";
import styles from "./search-bar.module.scss";

export const SearchBar = () => {
  return (
    <div className={styles["search-bar"]}>
      <div className={styles["search-bar__input-wrapper"]}>
        <input
          className={styles["search-bar__input-wrapper__input"]}
          type="text"
          placeholder="What are you looking for?"
        />
      </div>

      <Icon
        src="components/search-bar-suffix.svg"
        alt="search-bar-suffix"
        className={styles["search-bar__suffix"]}
      />
    </div>
  );
};
