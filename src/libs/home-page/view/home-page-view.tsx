import { Divider } from "../../shared/components";
import {
  BrowseByCategory,
  Footer,
  Header,
  HeaderCta,
  Services,
} from "../../shared/sections";
import { Bestsellers, FlashSales } from "../sections";

export const HomePageView = () => {
  return (
    <main>
      <HeaderCta />

      <Header />

      <FlashSales />

      <Divider isFullWidth={true} />

      <BrowseByCategory />

      <Divider />

      <Bestsellers />

      <Services />

      <Footer />
    </main>
  );
};
