const typescriptTransform = require("i18next-scanner-typescript")
const i18n = require("./next-i18next.config")

module.exports = {
  input: ["src/**/*.{js,jsx,ts,tsx}"],
  output: "./public/locales",
  options: {
    sort: true,
    defaultNs: i18n.defaultNs,
    ns: i18n.ns,
    resource: {
      loadPath: "{{lng}}/{{ns}}.json",
      savePath: "{{lng}}/{{ns}}.json",
    },
    func: {
      list: ["i18next.t", "i18n.t", "t"],
      extensions: [".js", ".jsx"],
    },
    trans: {
      component: "Trans",
      i18nKey: "i18nKey",
      extensions: [".js", ".jsx"],
    },
  },
  transform: typescriptTransform({
    // default value for extensions
    extensions: [".ts", ".tsx"],
  }),
  //   // optional custom transform function
  //   function (outputText, file, enc, done) {
  //     const parser = this.parser

  //     const content = fs.readFileSync(file.path, enc)
  //     let ns
  //     const match = content.match(/useTranslation\(.+\)/)
  //     if (match) ns = match[0].split(/(\'|\")/)[2]

  //     parser.parseFuncFromString(
  //       content,
  //       { list: ["t"] },
  //       function (key, options) {
  //         parser.set(
  //           key,
  //           Object.assign({}, options, {
  //             ns: ns ? ns : i18n.defaultNs,
  //           })
  //         )
  //       }
  //     )

  //     parser.parseTransFromString(
  //       content,
  //       { component: "Trans", i18nKey: "i18nKey" },
  //       function (key, options) {
  //         parser.set(
  //           key.split(":")[1],
  //           Object.assign({}, options, {
  //             ns: key.split(":")[0],
  //             nsSeparator: false,
  //             keySeparator: false,
  //           })
  //         )
  //         ++count
  //       }
  //     )
  //     done()
  //   }
  // ),
}
