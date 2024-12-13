# Contributing to `React Hook Form` (The Docs)

As the creators and maintainers of this project, we want to ensure that `react-hook-form` lives and continues to grow and evolve. We would like to encourage everyone to help and support this library by contributing.

## Code contributions

Here is a quick guide to doing code contributions to the library.

1. Fork and clone the repo to your local machine `git clone https://github.com/YOUR_GITHUB_USERNAME/website.git`

2. Create a new branch from `master` with a meaningful name for a new feature or an issue you want to work on: `git checkout -b your-meaningful-branch-name`

3. Install packages by running:

   ```shellscript
   pnpm install
   ```

4. Startup a local version of the docs

   ```shellscript
   pnpm run dev
   ```

5. Ensure your code is formatted properly

   ```shellscript
   pnpm run format
   ```

6. Push your branch: `git push -u origin your-meaningful-branch-name`

7. Submit a pull request to the upstream react-hook-form repository.

8. Choose a descriptive title and describe your changes briefly.

## Testing production build

To test the documentation production site on your local machine,
first execute the build script:

```shellscript
pnpm run build
```

Then start a local server which serves the file created by executing

```shellscript
pnpm run start
```

## Coding style

Please follow the coding style of the project.
React Hook Form uses prettier.
If possible, enable the prettier plugin in your editor to get real-time feedback. The formatting can be run manually with the following command:

```shellscript
pnpm run format:fix
```

## License

By contributing your code to the react-hook-form GitHub repository, you agree to license your contribution under the MIT license.
