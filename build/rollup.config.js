import path from 'path'
import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'

export default {
  entry: 'src/index.js',
  dest: 'dist/checkin.js',
  sourceMap: path.resolve('dist/checkin.js'),
  moduleName: 'checkin',
  format: 'umd',
  plugins: [
    babel({
      babelrc: false,
      comments: false,
      exclude: 'node_modules/**',
      presets: [
        'es2015-loose-rollup',
        'stage-0'
      ],
      plugins: [
        'transform-class-properties',
        ['transform-es2015-classes', { loose: true }]
      ]
    }),
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      include: 'node_modules/**',
      exclude: '**/*.css'
    }),
    uglify()
  ]
}
