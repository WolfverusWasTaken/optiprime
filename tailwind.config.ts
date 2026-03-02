import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "sit-red": "#E31D2B",
            },
            backgroundImage: {
                "dot-grid": "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            },
            backgroundSize: {
                "dot-grid-spacing": "40px 40px",
            },
        },
    },
    plugins: [],
};
export default config;
