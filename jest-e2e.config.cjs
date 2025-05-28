const config = require("./jest.config.cjs");

module.exports = {
    ...config,
    testEnvironment: "./src/env/prisma-test-environment.ts",
    testMatch: ['**/*e2e.test.ts']
};
