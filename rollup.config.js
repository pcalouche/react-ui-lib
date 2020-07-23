import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import image from '@rollup/plugin-image';
import {sizeSnapshot} from 'rollup-plugin-size-snapshot';
import packageJson from './package.json';

export default [
  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: 'src/index.ts',
    external: [
      ...Object.keys(packageJson.devDependencies)
    ],
    output: [
      {file: packageJson.main, format: 'cjs'},
      {file: packageJson.module, format: 'es'}
    ],
    plugins: [
      nodeResolve(),
      babel({
        babelHelpers: 'runtime',
        babelrc: false,
        inputSourceMap: true,
        sourceMaps: 'both',
        presets: [
          ['@babel/env', {'modules': false}],
          ['@babel/react']
        ],
        plugins: [
          ['@babel/plugin-transform-runtime', {'useESModules': true}]
        ],
        exclude: ['node_modules/**']
      }),
      typescript(),
      image(),
      sizeSnapshot()
    ],
    watch: {
      clearScreen: false
    }
  }
];