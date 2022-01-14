# React UI Library

This is template for creating React JS library. The library can be all TypeScript, all JavaScript, or a mix of both. It
also shows how you can manage a SCSS theme in your library for consumption across applications. You can remove this if
you don't have a need for this and opt to include CSS inside your components.

It demonstrates the following:

1. Using [Rollup.js](https://rollupjs.org/guide/en) to build ES and Common JS modules.
1. Bundling images in a library.
1. Demonstrates one approach for managing a CSS theme across consumers of this library.
1. A demo application that uses the library.
1. NPM scripts for live reload of the library during development.
1. Use of `jest` and `@testing/library` for React.

I try to update the dependencies frequently, but if you need to use older version of things like React, you should be
able to downgrade.

## How to use.

This library isn't published publicly, but can be experimented with locally. Here are the steps:

1. Run `npm i` in the root folder.
1. Run `npm link` to add the library to your local npm modules.
1. Run `npm run build:watch` to build the library and watch for changes.
1. Run `npm i` in the demo folder.
1. Run `npm link @pcalouche/react-ui-lib` in the demo folder to link the library to your local npm modules.
1. Run `npm run start` in the demo folder to load the demo.

Run `npm run build` from the root folder to build the library. This creates `dist` folder which contains everything that
would be published to npm.

**Note:** If this library was available in a repository, demo's package.json would include
`"@pcalouche/react-ui-lib": "1.0.0"` as a dependency.

## Avoiding Multiple Instances Warning With React Hooks

When using `npm link @pcalouche/react-ui-lib` to develop your library with the demo or another consuming application you
may run across React invalid hook call errors.

![React Invalid Hook call](./react-invalid-hook-call.png)

This happens when you're using React hooks in your consuming application. The application becomes confused between the
React installed under `node_modules` folder and React under the `node_modules/@pcalouche-react-ui-lib/node_modules`
folder. The latter is created by the `npm link @pcalouche/react-ui-lib` command. The solution is to give your consuming
application a hint on which instance of React to use when you have are using `npm link`. This is not an issue when you
install the library from a npm repository. Only when using `npm link`. The demo uses Create React App. I don't want to
eject the config because I like the default setup it provides for me.
Thankfully [Craco - Create React App Configuration Override](https://github.com/gsoft-inc/craco)
exists. See the script configuration in `package.json` and the `craco.config.ts` on how it's configured. If you're using
your own webpack configuration and not Create React App, that's ok too. You'll just need to add an `alias` references to
your webpack config. You'll need to do this for any other library that you bring that has React hooks if your
application accesses those hooks. Some common ones are `react-router-dom`
and `formik`.

## TypeScript Only Library Steps

1. No changes needed.

## JavaScript Only Library Steps

1. Set `allowJs` to `true` in tsconfig.json
1. Convert or remove the TypeScript files.

## Mix of TypeScript and JavaScript Library Steps

1. Set `allowJs` to `true` in tsconfig.json
1. Convert or remove the TypeScript files as needed.