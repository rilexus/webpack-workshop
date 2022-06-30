const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require("webpack-merge").merge;
const loadPresets = require("./presets/loadPresets");
const { resolve } = require("path");
const { DefinePlugin } = require("webpack");
class MyPlugin {
  apply(compiler) {
    // console.log(compiler.hooks);
  }
}

const requireConfig = (env /* development | production */) =>
  require(`./webpack.config.${env.mode}`)(env);

// Can be an object or a function
const webpackConfig = (
  { mode = "production" } /* can pass custom values via --env flag */
) => {
  // require configuration based on the mode
  // return requireConfig(env)
  return {
    mode,
    // NODE:
    //  webpack does not need an entry, it defaults to src/index.js
    entry: {
      // [filename]: path
      // if no output.filename specified, filename will be the output file name
      main: "./src/index.js",
    },
    output: {
      // NOTE:
      //  webpack defaults to "dist"
      path: __dirname + "/dist",
      // NOTE:
      //  webpack defaults to "main.js"
      // output file name will be the filename from the entry object
      filename: "[name].js",
      // random generated hash as a file name
      // filename: "[hash].js",
      // name from entry AND a hash
      // filename: "[name].[hash].js",
    },
    resolve: {
      // omit the file suffix
      // extensions: [".ts", ".tsx", ".js"],
      alias: {
        components: resolve(__dirname, "src/components/"),
        styles: resolve(__dirname, "src/styles/"),
      },
    },

    module: {
      rules: [
        {
          // files which end with ".ts"
          test: /\.ts$/,

          // single loader (transformer)
          use: "ts-loader",

          //   // array of loaders (transformers)
          // use: [
          //   "ts-loader",
          //   // { loader: "ts-loader" }, // object syntax
          // ],

          // use: (
          //   info /*{ resource, realResource, resourceQuery, issuer, compiler }*/
          // ) => {
          //   return [
          //     // array of loaders
          //     "ts-loader",
          //     // // object syntax
          //     // { loader: "ts-loader" },
          //     // loaders (transformers) will be applied from right to left
          //   ];
          // },
        },

        // transform wit babel
        // {
        //   test: /\.js$/,
        //   use: 'babel-loader'
        // }

        // {
        //   test: /\.css$/,
        //   use: 'css-loader'
        // }

        // {
        //   test: /\.css$/,
        //   use: ['style-loader', 'css-loader']
        // }

        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    plugins: [
      new MyPlugin(),
      // Does not need a config object. Defaults to index.html
      new MiniCssExtractPlugin(),
      new HtmlPlugin({
        // template: __dirname + "/public/index.html"
      }),
      new DefinePlugin({
        // ------ feature flags ------
        NICE_FEATURE: JSON.stringify(true),
        EXPERIMENTAL_FEATURE: JSON.stringify(false),

        version: JSON.stringify("1.0.0"),
        "typeof window": JSON.stringify("object"),
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),

        API_ENDPOINT: JSON.stringify("https://dev.example.com"),
      }),
    ],
  };
};

module.exports = (...args) => {
  return merge(webpackConfig(...args), loadPresets(...args));
};
