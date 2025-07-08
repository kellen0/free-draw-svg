import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';

export default {
  input: 'src/index.ts', // 入口文件
  output: [
    {
      dir: 'dist',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(), // 排除 peerDependencies
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.build.json' }),
    postcss({ extensions: ['.css', '.scss'] }), // 处理 CSS
    url(), // 处理图片等资源
    svgr(), // 处理 SVG
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react']
    })
  ]
};