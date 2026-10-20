// @ts-check
import tseslint from "typescript-eslint"
import nextConfig from "eslint-config-next"
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y"
import eslintPluginReact from "eslint-plugin-react"

export default tseslint.config(
  {
    ignores: [".next/**", ".contentlayer/**", "public/**", "next-env.d.ts"],
  },

  tseslint.configs.recommendedTypeChecked,

  ...nextConfig,

  {
    rules: {
      // react
      "react/prop-types": "off",
      "react/no-unescaped-entities": "off",
      "react/jsx-curly-brace-presence": "warn",

      // jsx-ally is already included in next-js so
      // we are adding only recommended rules directly here
      ...eslintPluginJsxA11y.flatConfigs.recommended.rules,
      "jsx-a11y/no-onchange": "warn",

      // import
      "import/no-anonymous-default-export": "off",

      // next
      "@next/next/no-img-element": "off",

      // React Compiler rules added in eslint-plugin-react-hooks 7 (via eslint-config-next 16).
      // Existing components predate them; revisit when refactoring those effects.
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/static-components": "off",
    },
  },

  // @ts-expect-error eslintPluginReact.configs.flat, but runtime is always defined
  eslintPluginReact.configs.flat["jsx-runtime"],

  {
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    languageOptions: {
      // eslint-config-next sets its own parser; type-aware rules need this one
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // typescript
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowAny: false,
          allowBoolean: false,
          allowNever: false,
          allowNullish: false,
          allowNumber: true,
          allowRegExp: false,
        },
      ],
    },
  }
)
