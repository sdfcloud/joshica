const webpack = require('webpack');
const webpackConfig = require('../../webpack-docs.config.js');
const fs = require('fs').promises;
const path = require('path');

module.exports = function bundleDocs() {
    console.log('Bundling docs...');
    return new Promise((resolve, reject) => {
        webpack(webpackConfig).run((err, stats) => {
            if (err || stats.hasErrors()) {
                reject(err || stats.toString());
            } else {
                return fs.copyFile(
                    path.join(__dirname, '..', '..', 'dist', 'joshica.js'),
                    path.join(__dirname, '..', '..', 'docs', 'releases', 'latest', 'joshica.js')
                ).then(() => {
                    resolve();
                }).catch(reject);
            }
        });
    });
}
