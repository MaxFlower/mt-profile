const version = require('./package').version;

const config = {
	test: 'test'
};

const mergedConfig = { version, ...config };
module.exports = mergedConfig;
