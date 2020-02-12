# React UI Library

This is proof of concept for creating an npm React JS UI library.  It demonstrates the following:

1. Using [Rollup.js](https://rollupjs.org/guide/en) to build ES and Common JS modules
1. Using Bootstrap and Reactstrap to help build its custom components
1. Bundling images
1. A pattern for organizing and styling UI components with SCSS
1. A pattern for loading and customizing Bootstrap's SCSS
1. A demo application that uses the library
1. NPM scripts for live reload of the library during development.

How to use.

This library isn't published publicly, but can be played with locally.  Here are the steps:

1. Run `npm i` in the root folder.
1. Run `npm link in the root folder` to add to add the library to your local npm modules.
1. Run `npm run build:watch` to build the library and watch for changes.
1. Run `npm i` in the demo folder.
1. Run `npm link @pcalouche/react-ui-lib` in the demo folder to link the library to your local npm modules.
1. Run `npm run start` in the demo folder to load the demo.

If you ran `npm run build` from the root folder it will build the library. A `dist` folder is created
with what would be publish to an npm repository. 

**Note:** If this library was available in a repository demo's package.json would include 
`"@pcalouche/react-ui-lib": "1.0.0"` as a dependencies.
