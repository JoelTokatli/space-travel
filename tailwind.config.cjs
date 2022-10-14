/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "destination-desktop":
          'url("./assets/destination/background-destination-desktop.jpg")',
        "destination-tablet":
          "url('./assets/destination/background-destination-tablet.jpg')",
        "destination-mobile":
          "url('./assets/destination/background-destination-mobile.jpg')",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
