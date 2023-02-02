const CracoLessPlugin = require("craco-less");
const path = require("path");

const resolve = function (dir) {
  return path.resolve(__dirname, dir);
};

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1890ff" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      "@src": resolve("src"),
    },
  },
};
