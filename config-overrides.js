// eslint-disable-next-line @typescript-eslint/no-var-requires
const {
  override,
  addExternalBabelPlugin,
  addBabelPreset,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require("customize-cra");

module.exports = override(
  addBabelPreset("@babel/preset-react"),
  addExternalBabelPlugin("@babel/plugin-proposal-class-properties")
);
