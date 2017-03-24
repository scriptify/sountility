
const path = require('path');
const merge = require('webpack-merge');

const DEV_CONFIGURATION = require('./webpack.config.dev.js');
const COMMON_CONFIGURATION = require('./webpack.config.common.js');
const createProductionConfiguration = require('./webpack.config.prod.js');
const { commandObject, PATHS } = require('./util.js');

// Maybe remove with new version:
process.noDeprecation = true;



switch(commandObject.cmd) {

  case 'dev':
    module.exports = merge(COMMON_CONFIGURATION, DEV_CONFIGURATION);
  break;

  case 'prod':
    if(commandObject.params.length < 1)
      throw new Error(`Missing parameter to build the package: start:prod:<packageName>`);

      console.log('Building: ' + commandObject.params);

    module.exports = merge(COMMON_CONFIGURATION, createProductionConfiguration(commandObject.params[0]));
  break;

  default:
    throw new Error(`No such command: ${ commandObject.cmd }`);
}
