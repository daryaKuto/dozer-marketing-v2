// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{html,js,ts,jsx,tsx}", "./components/**/*.{html,js,ts,jsx,tsx}", "./app/globals.css"],
  theme: {
      extend: {
          colors: {
              "dark-grey": "var(--dark-grey)",
              "darker-grey": "var(--darker-grey)",
              "dozer-white": "var(--dozer-white)",
              "dozer-yellow": "var(--dozer-yellow)",
              "light-gray": "var(--light-gray)",
              "medium-gray-shadow": "var(--medium-gray-shadow)",
              "medium-grey": "var(--medium-grey)",
          },
          fontFamily: {
              "body-text": "var(--body-text-font-family)",
              "body-text-2": "var(--body-text-2-font-family)",
              footer: "var(--footer-font-family)",
              links: "var(--links-font-family)",
              "nav-bar": "var(--nav-bar-font-family)",
              "page-subtitle": "var(--page-subtitle-font-family)",
              "page-title": "var(--page-title-font-family)",
              "section-subtitle": "var(--section-subtitle-font-family)",
              "section-title": "var(--section-title-font-family)",
          },
          screens: {
            xs: '400px',
            '3xl': '1680px',
            '4xl': '2200px',
          },
          maxWidth: {
            '10xl': '1512px',
          }
      },
  },
  plugins: [],
};