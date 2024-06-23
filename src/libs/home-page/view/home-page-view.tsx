import { Divider } from "../../shared/components";
import { BrowseByCategory, Header, HeaderCta } from "../../shared/sections";

export const HomePageView = () => {
  return (
    <main>
      <HeaderCta />

      <Header />

      <BrowseByCategory />

      <Divider />
    </main>
  );
};
