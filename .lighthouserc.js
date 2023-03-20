module.exports = {
  collect: {
    autodiscoverUrlBlocklist: ["_gatsby/slices/_gatsby-scripts-1.html"],
  },
  ci: {
    upload: {
      target: "temporary-public-storage",
    },
    assert: {
      assertions: {
        "first-contentful-paint": ["error", { maxNumericValue: 3000 }],
      },
    },
  },
}
