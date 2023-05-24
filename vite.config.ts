import { defineConfig, loadEnv } from "vite";
import { sentryVitePlugin } from "@sentry/vite-plugin";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  return {
    build: {
      sourcemap: true, // Source map generation must be turned on
    },
    plugins: [
      react(),
      sentryVitePlugin({
        org: "bht-ub",
        project: "webtech",

        // Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
        // and need `project:releases` and `org:read` scopes
        authToken: env.SENTRY_AUTH_TOKEN,

        sourcemaps: {
          // Specify the directory containing build artifacts
          assets: "./**",
          // Don't upload the source maps of dependencies
          ignore: ["./node_modules/**"],
        },

        // Helps troubleshooting - set to false to make plugin less noisy
        debug: true,
      }),
    ],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./tests/setup.ts"],
    },
  };
});
