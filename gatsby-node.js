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
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/migrate-v6-to-v7`,
    toPath: `https://legacy.react-hook-form.com/migrate-v6-to-v7`,
    statusCode: 200,
  })
}
