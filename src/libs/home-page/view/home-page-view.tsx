import { Grid, Text } from "../../shared/components";
import { TextTypes } from "../../shared/components/text/text.types";

export const HomePageView = () => {
  return (
    <main>
      <Grid>
        <Text type={TextTypes["12sb"]}>Hello world!</Text>
      </Grid>
    </main>
  );
};
