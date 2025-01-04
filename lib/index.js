const getNodeEnv = () => process.env.NODE_ENV || "dev";

const nodeEnv = getNodeEnv();
const IS_DEV = nodeEnv === "dev";
const IS_PROD = nodeEnv === "prod";

module.exports = {
  getNodeEnv,
  IS_DEV,
  IS_PROD,
  ...require("./helper/file"),
  ...require("./helper/paths"),
  ...require("./helper/util"),
};
