import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // forceRerunTriggers: ["**/*.spec.ink"],
    include: ["test/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
    coverage: {
      reporter: ["text", "html"],
    },
  },
});
