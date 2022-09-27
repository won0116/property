const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
});

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set("@", path.resolve(__dirname, "src/"));
  },
};
