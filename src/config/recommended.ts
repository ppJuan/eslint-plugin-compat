// Reconmmended configs for this plugin
export default {
  plugins: ["compat-patch"],
  env: {
    browser: true,
  },
  rules: {
    "compat-patch/compat": "error",
  },
};
