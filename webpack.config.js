const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const pkg = require('./package.json');
const monacoEditorPkg = require('monaco-typescript/package.json');

let importTypescript = {
  compilerOptions: {
    sourceMap: true,
    rootDir: 'src',    
    module: "ES6",
    target: "ES5",
    noEmit: false,
    declaration: false,
    allowSyntheticDefaultImports: true,
    esModuleInterop: true
  }
};

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: {
    bundle: path.join(__dirname, `src/index.ts`)
  },
  output: {
    filename: 'app.js',
    path: path.join(__dirname, `docs`)
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }, {
        test: /\.tsx?$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }, {
        test: /\.tsx?$/,
        exclude: /(node_modules|(\.d\.ts$))/,
        loader: 'ts-loader',
        options: importTypescript
      }, {
        test: /\.html/,
        use: 'raw-loader'
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: true
      })
    ]
  }
};