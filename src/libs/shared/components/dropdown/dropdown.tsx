import { Text, TextTypes, Icon } from "../../components";

import styles from "./dropdown.module.scss";
import { useState } from "react";

export const Dropdown = ({
  options,
  //! Change it to handled by props directly later
  isOpened = false,
}: {
  options?: [string];
  isOpened?: boolean;
}) => {
  const [pickedOption, setPickedOption] = useState("English");

  if (!isOpened) {
    return (
      <div className={styles["dropdown"]}>
        <Text type={TextTypes["14r"]}>{pickedOption}</Text>

        <Icon
          className={styles["dropdown__icon"]}
          src="components/dropdown.svg"
          alt="dropdown closed"
        />
      </div>
    );
  } else {
    return <div className={styles["dropdown"]}>{pickedOption}</div>;
  }
};
