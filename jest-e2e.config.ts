import config from "./jest.config"; 

export default {
    ...config,
    testEnvironment: "./src/env/prisma-test-environment.ts",
    testMatch: ['**/*e2e.test.ts']
};
