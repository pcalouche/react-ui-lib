import packageJson from './package.json';
import babel from 'rollup-plugin-babel';
import image from 'rollup-plugin-img';
import external from 'rollup-plugin-peer-deps-external';
import nodeResolve from 'rollup-plugin-node-resolve';
import {sizeSnapshot} from 'rollup-plugin-size-snapshot';
import {terser} from 'rollup-plugin-terser';

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
    external(),
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