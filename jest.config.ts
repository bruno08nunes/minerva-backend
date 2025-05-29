import type { Config } from "jest";

const config: Config = {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleFileExtensions: ["ts", "js"],
    testMatch: ["**/tests/**/*.test.(ts|js)", "!**/*-e2e.test.(ts|js)"],
    transform: {
        "^.+\\.(t|j)sx?$": "@swc/jest",
    },
};

export default config;
