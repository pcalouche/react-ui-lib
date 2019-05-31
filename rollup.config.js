import babel from 'rollup-plugin-babel';
import image from 'rollup-plugin-img';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import {sizeSnapshot} from 'rollup-plugin-size-snapshot';
import {terser} from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import packageJson from './package.json';

const peerDependencies = Object.keys(packageJson.peerDependencies);

export default {
  input: 'src/index.js',
  external: [peerDependencies],
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
    peerDepsExternal(),
    commonjs({
      include: 'node_modules/**'
    }),
    nodeResolve(),
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