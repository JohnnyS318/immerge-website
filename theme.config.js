

const { ThemeManager, Theme } = require("tailwindcss-theming/api");
const lightTheme = require("./src/themes/light-theme");

const base = new Theme().addColors(lightTheme);

const dark = new Theme().addColors({
  brand: "#44b3ac", // Your brand color
  "on-brand": "#ffffff", // For everything that goes on your brand color
  background: "#1c1e26", // A background color
  "on-background": "#d5d8da", // For everything that goes on your background color
});

module.exports = new ThemeManager()
  .setDefaultTheme(base) // Sets the `base` theme as the default theme.
  .setDefaultDarkTheme(dark); // Sets the `dark` theme as the default theme for users that prefer the `dark` scheme.
