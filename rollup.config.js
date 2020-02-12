import babel from 'rollup-plugin-babel';
import image from 'rollup-plugin-img';
import nodeResolve from '@rollup/plugin-commonjs';
import commonjs from '@rollup/plugin-node-resolve';
import {sizeSnapshot} from 'rollup-plugin-size-snapshot';
import {terser} from 'rollup-plugin-terser';
import packageJson from './package.json';

export default {
  input: 'src/index.js',
  external: [
    ...Object.keys(packageJson.devDependencies),
    ...Object.keys(packageJson.peerDependencies)
  ],
  output: [{
    file: packageJson.main,
    format: 'cjs',
    sourcemap: true
  }, {
    file: packageJson.module,
    format: 'es',
    sourcemap: true
  }],
  watch: {
    clearScreen: false
  },
  plugins: [
    babel({
      presets: [
        [
          '@babel/env',
          {
            'loose': true,
            'shippedProposals': true,
            'modules': false
          }
        ],
        '@babel/react'
      ],
      plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-class-properties'
      ],
      exclude: 'node_modules/**'
    }),
    nodeResolve(),
    commonjs(),
    image({
      limit: 1024 * 100 //100K max
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    sizeSnapshot(),
    terser()
  ]
};