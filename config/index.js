const isProduction = process.env.NODE_ENV === "production";

module.exports = require(isProduction ? "./prod" : "./dev");
