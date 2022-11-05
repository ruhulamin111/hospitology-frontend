/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#162b7a",
          secondary: "#2ad2c3",
          accent: "#caf0f8",
          neutral: "#1c2e76",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [
    require("daisyui"),
    require('tw-elements/dist/plugin')
  ],
}
