module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all JSX/TSX files in the `src` directory
  ],
  theme: {
    extend: {}, // Use this to extend default Tailwind themes
  },
  plugins: [], // Add Tailwind plugins here if needed
  corePlugins: {
    preflight: false, // Disables Tailwind's CSS reset (Preflight)
  },
};
