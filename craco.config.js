/**
 * @description [Override] : 웹팩 설정
 * @tutorial https://www.npmjs.com/package/@craco/craco
 */

const path = require("path");

module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
};
