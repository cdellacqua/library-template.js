# JavaScript library template

All the files and configurations needed
to start a new JS library.

## Features

- [TypeScript](https://www.typescriptlang.org/) support;
- built-in testing ([mocha](https://mochajs.org/) and [chai](https://www.chaijs.com/) for writing tests, [c8](https://github.com/bcoe/c8) for coverage testing);
- demo web page and node app for development purposes;
- [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) (code style and linting);
- [Vite.js](https://vitejs.dev/) bundler, configured to output TypeScript declarations and different module formats to guarantee compatibility
  across different targets ([CommonJS](https://en.wikipedia.org/wiki/CommonJS), [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) and [UMD](https://github.com/umdjs/umd));
- [TypeDoc](https://typedoc.org/) integration to automatically generate documentation.

## Ready to start?

Running the following commands will clone this template into `my-awesome-library`, install all its dependencies and setup the
development environment:

```sh
npx degit cdellacqua/library-template.js my-awesome-library
cd my-awesome-library
npm i
npm run setup
```

You can now look for **TODOs** in the project files and start
working on your new awesome library!

## Project structure

```
├── coverage: (created by npm run coverage) contains temporary files generated by the coverage test
├── dist: (created by npm run build) contains the bundled output of the library and the type declarations
│   ├── index.cjs.js: CommonJS-compatible bundle
│   ├── index.d.ts: TypeScript type declarations
│   ├── index.es.js: ECMAScript Module-compatible bundle
│   └── index.umd.js: Universal Module Definition-compatible bundle
├── index.html: demo page
├── package.json: contains the project metadata and dependency list
├── package-lock.json: contains metadata about the installed packages
├── README.md: this file
├── README-template.md: a template you can use to create the library README
├── setup.js: the setup script triggered by npm run setup that sets up the package.json with some information about the project
├── src: folder that contains the source of your library and the demo page
│   ├── lib: root of your library source files
│   │   └── index.ts: library entry point
│   ├── browser.ts: script that runs in the demo page
│   ├── node.ts: script that runs in the demo node app
│   ├── style.css: basic style for the demo page
│   └── vite-env.d.ts: Vite.js type definitions
├── tests: folder that contains tests
│   └── example.test.ts: mocha + chai usage example
├── .editorconfig: contains the text editor configuration in a common format
├── .eslintignore: contains a list of patterns that eslint will ignore
├── .eslintrc.cjs: contains settings for eslint
├── .gitignore: contains a list of patterns that git will ignore
├── .mocharc.json: contains settings for mocha
├── .prettierignore: contains a list of patterns that prettier will ignore
├── .prettierrc: contains settings for prettier
├── tsconfig.json: TypeScript compiler configuration file
└── vite.config.js: Vite.js bundler configuration file
```

## npm run ...

This template provides some useful scripts that you can run using the `npm run <script>` syntax:

- `coverage`: runs tests and computes code coverage;
- `test`: tests the application using [mocha](https://www.npmjs.com/package/mocha) and [chai](https://www.npmjs.com/package/chai);
- `dev:browser`: starts Vite.js in watch mode to let you test the demo page;
- `dev:node`: starts nodemon in watch mode to let you test the demo node app;
- `build`: compiles and bundles the library;
- `doc`: runs typedoc to automatically generate library documentation based on type annotations and JSDoc comments;
- `prepack`: builds, tests and generates the documentation;
- `lint`: runs eslint;
- `lint:fix`: runs eslint with the --fix flag;
- `prettier`: runs prettier to verify code-style;
- `prettier:fix`: runs prettier with the --write flag;
- `setup`: runs the setup.js script described above.

## License

MIT License

Copyright (c) 2021 Carlo Dell'Acqua

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
