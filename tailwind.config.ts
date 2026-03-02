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
                "navy-deep": "#0B1C2D",
                "navy-steel": "#132F4C",
                "gunmetal": "#1E293B",

                // Blue Accent System (Primary)
                "prime-blue": "#0057FF",
                "electric-blue": "#1E90FF",
                "cyan-highlight": "#00C2FF",

                // Red Accent System (Controlled Energy)
                "prime-red": "#D7263D",
                "crimson-deep": "#9B1C31",
                "energy-red": "#FF2D2D",

                // Neutral Text System
                "soft-white": "#F1F5F9",
                "light-grey": "#CBD5E1",
                "medium-grey": "#64748B",

                // Legacy reference mapping (for migration)
                "sit-red": "#D7263D", // Mapping sit-red to prime-red
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

