// Config for overriding defaults in Create React App without having to eject
// See more here https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md
import path from 'path';

// Aliases to some dependencies, so we don't get complaints of two instances.
export default {
  webpack: {
    alias: {
      'react': path.resolve(__dirname, './node_modules/react')
    }
  }
};