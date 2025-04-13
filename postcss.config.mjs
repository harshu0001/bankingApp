// /** @type {import('postcss-load-config').Config} */
// const config = {
//   plugins: {
//     "@tailwindcss/postcss": {},
//   },
// };

// export default config;
// postcss.config.mjs - AFTER
export default {
  plugins: {
    '@tailwindcss/postcss': {}, // <-- Use the new package name here
    'autoprefixer': {}, // Keep other plugins like autoprefixer
    // ... other plugins
  },
};