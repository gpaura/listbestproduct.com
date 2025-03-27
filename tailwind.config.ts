// tailwind.config.ts
import type { Config } from "tailwindcss";

export default <Config>{
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    // If daisyUI does not provide an ES module export, we disable the rule for this line.
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("daisyui"),
  ],
};
