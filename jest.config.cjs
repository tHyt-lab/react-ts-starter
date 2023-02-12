module.exports = {
  roots: ["<rootDir>/test"],
  testMatch: ["**/?(*.)+(spec|test).+(js|jsx|ts|tsx)"],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "@swc/jest",
      {
        sourceMaps: true,
        module: {
          type: "commonjs",
        },
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/__mocks__/fileMock.ts",
    "\\.(css|scss)$": "<rootDir>/test/__mocks__/styleMock.ts",
  },
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
