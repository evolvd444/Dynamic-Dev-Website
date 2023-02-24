import { buildLegacyTheme, defineConfig } from "sanity";

const props = {
  "--my-white": "#fff",
  "--my-black": "#1a1a1a",
  "--dynamic.dev-brand": "#5b1a99",
  "--my-purple": "#6b1a93",
  "--my-teal": "#6ae2b4",
  "--my-blue":"#12cbfd"
};

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  "--black": props["--my-black"],
  "--white": props["--my-white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],

  /* Brand */
  "--brand-primary": props["-dynamic-dev"],

  // Default button
  "--default-button-color": "#666",
  "--default-button-primary-color": props["-dynamic-dev"],
  "--default-button-success-color": props["--my-teal"],
  "--default-button-warning-color": props["--my-blue"],
  "--default-button-danger-color": props["--my-purple"],

  /* State */
  "--state-info-color": props["-dynamic-dev"],
  "--state-success-color": props["--my-teal"],
  "--state-warning-color": props["--my-blue"],
  "--state-danger-color": props["--my-purple"],

  /* Navbar */
  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["-dynamic-dev"],
});