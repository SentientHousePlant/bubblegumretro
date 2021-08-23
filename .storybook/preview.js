import GlobalStyles from "../src/components/BubblegumGlobalStyle/BubblegumGlobalStyle";
import { addDecorator } from "@storybook/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

function withGlobalStyles(storyFn) {
  return (
    <>
      <GlobalStyles />
      {storyFn()}
    </>
  );
}

addDecorator(withGlobalStyles);
