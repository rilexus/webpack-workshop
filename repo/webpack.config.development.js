const config = {
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
    // filename: "[name].js",
    // random generated hash as a file name
    // filename: "[hash].js",
    // name from entry AND a hash
    filename: "[name].[hash].js",
  },
  // resolve: {
  //   // omit the file suffix
  //   extensions: [".ts", ".tsx", ".js"],
  // },
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
    ],
  },
};

module.exports = config;
