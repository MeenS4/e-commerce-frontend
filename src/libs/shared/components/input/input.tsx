import classNames from "classnames";
import { Icon } from "../icon";
import styles from "./input.module.scss";
import { ChangeEventHandler, MouseEventHandler } from "react";

export const Input = ({
  onChange,
  value,
  placeholder,
  suffixSrc,
  onSuffixClicked,
  className,
}: {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  placeholder?: string;
  suffixSrc?: string;
  onSuffixClicked?: MouseEventHandler<HTMLElement>;
  className?: string;
}) => {
  const inputClassNames = classNames(styles["input-wrapper"], className);

  return (
    <div className={inputClassNames}>
      <input
        className={styles["input-wrapper__input"]}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {/* Display suffix only if icon is provided */}
      {suffixSrc ? (
        <Icon
          src={suffixSrc}
          alt="apply to email newsletter"
          onClick={onSuffixClicked}
        />
      ) : null}
    </div>
  );
};
