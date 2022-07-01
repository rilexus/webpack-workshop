const merge = require('webpack-merge').merge;
const fs = require('fs')

const loadPresets = (env) => {

    const envKeys = Object.keys(env)
        .filter((key) => key.startsWith('preset:'))
        .map((key) => key.split(':')[1]);


    const configs = envKeys.map((preset) => {
        const path = __dirname + `/webpack.${preset}.js`

        if (!fs.existsSync(path)) return null;

        return require(path)(env);

    }).filter(Boolean);

    return merge({}, ...configs)
}

module.exports = loadPresets
