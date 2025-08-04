const clean = require('./steps/clean');
const bundleCode = require('./steps/bundle-code');
const bundleDocs = require('./steps/bundle-docs');

async function build() {
  try {
    await clean();
    await bundleCode();
    await bundleDocs();
    console.log('Production build completed successfully!');
  } catch (error) {
    console.error('Build failed:', error.message);
    process.exit(1);
  }
}

build();
