import { Divider } from "../../shared/components";
import { BrowseByCategory, Header, HeaderCta } from "../../shared/sections";
import { Bestsellers } from "../sections";

export const HomePageView = () => {
  return (
    <main>
      <HeaderCta />

      <Header />

      <Divider isFullWidth={true} />

      <BrowseByCategory />

      <Divider />

      <Bestsellers />
    </main>
  );
};
