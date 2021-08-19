const StylesProvider = require("@material-ui/styles").StylesProvider;

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
};

export const decorators = [
  Story => (
    <StylesProvider injectFirst>
      <Story />
    </StylesProvider>
  ),
];
