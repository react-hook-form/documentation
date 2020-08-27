module.exports = {
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
