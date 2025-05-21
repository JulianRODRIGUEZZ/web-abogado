import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import preact from "@astrojs/preact";

export default defineConfig({
  integrations: [tailwind(), preact()],

  output: "server",
  adapter: vercel(),
});
