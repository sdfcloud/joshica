const { rm } = require('fs/promises');
const path = require('path');

module.exports = async function clean() {
    console.log('Cleaning /dist directory...');
    await rm(path.join(__dirname, '..', '..', 'dist'), { recursive: true, force: true });
}
