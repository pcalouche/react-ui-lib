// Config for overriding defaults in Create React App without having to eject
// See more here https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md
const path = require('path');

// We need to create aliases for dependencies that use hooks so we don't get complaints of two instances.
// Other common libraries that I've run into this issue are react-router-dom and formik.
module.exports = {
  webpack: {
    alias: {
      'react': path.resolve(__dirname, './node_modules/react')
    }
  }
};