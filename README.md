# React UI Library

This is proof of concept for creating React JS library. The library can be all TypeScript, all JavaScript, 
or a mix of both. It uses the Bootstrap library, but this is not a requirement. You could remove all the 
Bootstrap code and dependencies if you choose.

It demonstrates the following:

1. Using [Rollup.js](https://rollupjs.org/guide/en) to build ES and Common JS modules
1. Using [Bootstrap](https://getbootstrap.com/) and [Reactstrap](https://reactstrap.github.io/) 
to help build its custom components
1. Bundling images
1. A pattern for organizing and styling UI components with SCSS
1. A pattern for loading and customizing Bootstrap's SCSS
1. A demo application that uses the library
1. NPM scripts for live reload of the library during development.

## How to use.

This library isn't published publicly, but can be played with locally.  Here are the steps:

1. Run `npm i` in the root folder.
1. Run `npm link in the root folder` to add the library to your local npm modules.
1. Run `npm run build:watch` to build the library and watch for changes.
1. Run `npm i` in the demo folder.
1. Run `npm link @pcalouche/react-ui-lib` in the demo folder to link the library to your local npm modules.
1. Run `npm run start` in the demo folder to load the demo.

Run `npm run build` from the root folder to build the library. This creates `dist` folder which contains
everything that would be published to npm.

**Note:** If this library was available in a repository, demo's package.json should include 
`"@pcalouche/react-ui-lib": "1.0.0"` as a dependency.

## TypeScript Only Library Steps

1. Remove the following dev dependencies from `package.json`
   - @babel/core
   - @babel/plugin-transform-runtime
   - @babel/preset-env
   - @babel/preset-react
   - @rollup/plugin-babel
1. Remove the babel plugin configuration in `rollup.js`
1. Set `allowJs` to false in `tsconfig.json`.

## JavaScript Only Library Steps

1. Remove the following dev dependencies from `package.json`:
  - rollup-plugin-typescript2
  - typescript
1. Remove the `types` key in package.json
1. Delete `tsconfig.json`.
1. Delete `custom.d.ts`
1. Convert ts and tsx files to js.

## Mix of TypeScript and JavaScript Library Steps

Useful if you currently have a JavaScript library and want to gradually migrate it to TypeScript.

1. No changes required!

