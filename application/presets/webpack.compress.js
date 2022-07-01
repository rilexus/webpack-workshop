const CompressPlugin = require('compression-webpack-plugin');


module.exports = (env) => {
    return {
        plugins: [
            new CompressPlugin({
                algorithm: "gzip",
            })
        ]
    }
}
