import { useState } from "react";
import {
  Grid,
  Heading,
  HeadingTypes,
  Icon,
  Text,
  TextTypes,
} from "../../components";
import { Input } from "../../components/input";
import styles from "./footer.module.scss";

export const Footer = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <section className={styles["footer"]}>
      <Grid>
        <div className={styles["footer__newsletter"]}>
          <Heading
            className={styles["footer__newsletter__heading"]}
            type={HeadingTypes["24b"]}
          >
            Exclusive
          </Heading>

          <Heading
            className={styles["footer__newsletter__sub-heading"]}
            type={HeadingTypes["20b"]}
          >
            Subscribe
          </Heading>

          <Text
            className={styles["footer__newsletter__desc"]}
            type={TextTypes["16r"]}
          >
            Get 10% off your first order
          </Text>

          <Input
            className={styles["footer__newsletter__input"]}
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter your email"
            suffixSrc="components/send.svg"
            onSuffixClicked={() => {}}
          />
        </div>

        <div className={styles["footer__support"]}>
          <Heading
            className={styles["footer__support__heading"]}
            type={HeadingTypes["20b"]}
          >
            Support
          </Heading>

          <Text type={TextTypes["16r"]}>
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </Text>

          <Text type={TextTypes["16r"]}>exclusive@gmail.com</Text>

          <Text type={TextTypes["16r"]}>+88015-88888-9999</Text>
        </div>

        <div className={styles["footer__account"]}>
          <Heading
            className={styles["footer__account__heading"]}
            type={HeadingTypes["20b"]}
          >
            Account
          </Heading>

          <Text type={TextTypes["16r"]}>My Account</Text>

          <Text type={TextTypes["16r"]}>Login / Register</Text>

          <Text type={TextTypes["16r"]}>Cart</Text>

          <Text type={TextTypes["16r"]}>Wishlist</Text>

          <Text type={TextTypes["16r"]}>Shop</Text>
        </div>

        <div className={styles["footer__quick-link"]}>
          <Heading
            className={styles["footer__account__heading"]}
            type={HeadingTypes["20b"]}
          >
            Quick Link
          </Heading>

          <Text type={TextTypes["16r"]}>Privacy Policy</Text>

          <Text type={TextTypes["16r"]}>Terms Of Use</Text>

          <Text type={TextTypes["16r"]}>FAQ</Text>

          <Text type={TextTypes["16r"]}>Contact</Text>
        </div>

        <div className={styles["footer__socials"]}>
          <Heading
            className={styles["footer__socials__heading"]}
            type={HeadingTypes["20b"]}
          >
            Download App
          </Heading>

          <Text
            className={styles["footer__socials__desc"]}
            type={TextTypes["12m"]}
          >
            Save $3 with App New User Only
          </Text>

          <img
            className={styles["footer__socials__qr"]}
            src="assets/images/qr-code.jpg"
            alt="qr code"
          />

          <div className={styles["footer__socials__profiles"]}>
            <Icon src="components/facebook.svg" alt="facebook" />

            <Icon src="components/twitter.svg" alt="twitter" />

            <Icon src="components/instagram.svg" alt="instagram" />

            <Icon src="components/linkedin.svg" alt="linkedin" />
          </div>
        </div>

        <Text className={styles["footer__copyright"]} type={TextTypes["16r"]}>
          &copy; Copyright Rimel 2022. All right reserved
        </Text>
      </Grid>
    </section>
  );
};
