module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': 'Work Sans, sans-serif',
      'mono': 'Space Mono, monospace',
    }
  },
  variants: {},
  plugins: [],
}
