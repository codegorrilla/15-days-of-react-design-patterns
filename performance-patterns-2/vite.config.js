import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          //Add the React compiler plugin here
          [
            "babel-plugin-react-compiler",
            {
              /* Optional config options */
            },
          ],
        ],
      },
    }),
    tailwindcss(),
  ],
});
