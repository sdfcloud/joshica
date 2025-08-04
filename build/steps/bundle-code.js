const webpack = require('webpack');
const webpackConfig = require('../../webpack.config.js');

module.exports = function bundleCode(development = false) {

    if (development) {
        console.log('Bundling code in development mode...');
        webpackConfig.mode = 'development';
    } else {
        console.log('Bundling code...');
    }

    return new Promise((resolve, reject) => {
        webpack(webpackConfig).run((err, stats) => {
            if (err || stats.hasErrors()) {
                reject(err || stats.toString());
            } else {
                resolve();
            }
        });
    });
}


