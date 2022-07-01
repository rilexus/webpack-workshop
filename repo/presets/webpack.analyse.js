const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env) => {
    return {
        plugins: [
            new BundleAnalyzerPlugin({
                openAnalyzer: true
            })
        ]
    }
}
