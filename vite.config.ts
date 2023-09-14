import react from "@vitejs/plugin-react-swc";
import { defineConfig, mergeConfig } from "vite";
import { defineConfig as testDefineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default mergeConfig(
  defineConfig({
    plugins: [react()],
  }),
  testDefineConfig({
    test: {
      globals: true,
      environment: "happy-dom",
      setupFiles: "./vitest.setup.ts",
    },
  })
);
