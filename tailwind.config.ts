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
                // Background Foundation
                "pure-black": "#050505",
                "dark-gray": "#121212",
                "gunmetal": "#1E1E1E",

                // Removed Blue Accent System
                "prime-blue": "#FF0033", // Mapping to red to avoid breaking components immediately, but we will fix them
                "electric-blue": "#FF3333",
                "cyan-highlight": "#FFFFFF",

                // Red Accent System (Primary)
                "prime-red": "#E60000",
                "crimson-deep": "#8B0000",
                "energy-red": "#FF1A1A",

                // Neutral Text System
                "soft-white": "#F1F5F9",
                "pure-white": "#FFFFFF",
                "light-grey": "#A3A3A3",
                "medium-grey": "#525252",

                // Legacy reference mapping
                "sit-red": "#E60000",
                "navy-deep": "#050505",
                "navy-steel": "#121212",
            },
            backgroundImage: {
                "dot-grid": "radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
            },
            backgroundSize: {
                "dot-grid-spacing": "40px 40px",
            },
        },
    },
    plugins: [],
};
export default config;

