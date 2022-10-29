module.exports = {
  purge: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./*.html",
  ],
  darkMode: false,
  theme: {
    // customColorPalette: {
    //   utilities: {
    //     textColor: true, // render text color utilities: true (default) | false
    //     backgroundColor: true, // render background color utilities: true (default) | false
    //     borderColor: true, // render border color utilities: true (default) | false
    //     gradientColorStops: true, // render gradient color utilities: true (default) | false
    //     placeholderColor: true, // render placeholder color utilities: true (default) | false
    //     divideColor: true, // render divide color utilities: true (default) | false
    //     ringColor: true, // render ring color utilities: true (default) | false
    //     ringOffsetColor: true, // render ring offset color utilities: true (default) | false
    //   },
    //   steps: 100, // define the steps between each shade: 100 (default) | 50
    //   calculation: "relative", // change color calculation: relative (default) | linear
    // },
    extend: {
      colors: {
        white: "#ffffff",
        error: "#FFC7CF",
        transparent: "transparent",
        banana: {
          DEFAULT: "var(--banana)",
          20: "var(--banana-20)",
          40: "var(--banana-40)",
          60: "var(--banana-60)",
          80: "var(--banana-80)",
        },
        blush: {
          DEFAULT: "var(--blush)",
          20: "var(--blush-20)",
          40: "var(--blush-40)",
          60: "var(--blush-60)",
          80: "var(--blush-80)",
        },
        indigo: {
          DEFAULT: "var(--indigo)",
          20: "var(--indigo-20)",
          40: "var(--indigo-40)",
          60: "var(--indigo-60)",
          80: "var(--indigo-80)",
        },
        lavender: {
          DEFAULT: "var(--lavender)",
          light: "var(--lavender-light)",
        },
        night: {
          DEFAULT: "var(--night)",
          5: "var(--night-5)",
          10: "var(--night-10)",
          20: "var(--night-20)",
          40: "var(--night-40)",
          60: "var(--night-60)",
          80: "var(--night-80)",
        },
        seafoam: {
          DEFAULT: "var(--seafoam)",
          20: "var(--seafoam-20)",
          40: "var(--seafoam-40)",
          60: "var(--seafoam-60)",
          80: "var(--seafoam-80)",
        },
        tiger: {
          DEFAULT: "var(--tiger)",
          20: "var(--tiger-20)",
          40: "var(--tiger-40)",
          60: "var(--tiger-60)",
          80: "var(--tiger-80)",
        },
      },
    },
  },
  safelist: ["bg-blush"],
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
