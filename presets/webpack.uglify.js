const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = () => {
    return {
        optimization: {
            minimizer: [new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i,
            })],
        },
    }
}
