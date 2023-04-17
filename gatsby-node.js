exports.onCreateWebpackConfig = ({ stage, getConfig, actions }) => {
  /**
   * That aims to remove mini-css-extract-plugin "Conflicting order" errors during build
   * @link https://github.com/facebook/create-react-app/issues/5372
   */
  if (stage === "build-javascript" || stage === "develop") {
    const config = getConfig()
    const miniCssExtractPlugin = config.plugins.find(
      (plugin) => plugin.constructor.name === "MiniCssExtractPlugin"
    )

    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true
    }

    actions.replaceWebpackConfig(config)
  }
}

exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/resources`,
    toPath: `/resources/articles`,
  })
}

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: "@babel/plugin-transform-react-jsx",
    options: {
      runtime: "automatic",
    },
  })
}
