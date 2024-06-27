import { Divider } from "../../shared/components";
import { BrowseByCategory, Header, HeaderCta } from "../../shared/sections";
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
    </main>
  );
};
