import nodeResolve from '@rollup/plugin-node-resolve';
// import babel from '@rollup/plugin-babel';
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
      {file: packageJson.main, format: 'cjs', sourcemap: true},
      {file: packageJson.module, format: 'es', sourcemap: true}
    ],
    plugins: [
      nodeResolve(),
      // Remove babel plugin and uninstall @rollup/plugin-babel if your library is 100% TypeScript
      // babel({
      //   babelHelpers: 'runtime',
      //   babelrc: false,
      //   inputSourceMap: true,
      //   sourceMaps: 'both',
      //   presets: [
      //     ['@babel/env', {'modules': false}],
      //     ['@babel/react']
      //   ],
      //   plugins: [
      //     ['@babel/plugin-transform-runtime', {'useESModules': true}]
      //   ],
      //   exclude: ['node_modules/**']
      // }),
      // Remove typescript plugin and uninstall rollup-plugin-typescript2 if your library is 100% JavaScript
      typescript(),
      image(),
      sizeSnapshot()
    ],
    watch: {
      clearScreen: false
    }
  }
];