'use strict';

const fs = require('fs');
const {promisify} = require('util');
const debug = require('debug')('nuxt:cname');
const path = require('path');

const writeFile = promisify(fs.writeFile);

module.exports = function (moduleOptions) {
  const options = {
    ...this.options,
    ...this.options.env,
    ...moduleOptions,
    ...process.env
  };

  // CNAME is written to static dir only in generate mode
  if (!options.baseUrl || !options.generateCNAME || options.dev || !options.generate) {
    return Promise.resolve();
  }

  debug('Starting write CNAME file');
  const cnamePath = path.resolve(this.options.srcDir, path.join('static', 'CNAME'));

  return writeFile(cnamePath, options.baseUrl)
    .then(() => {
      debug('Finish writing CNAME file');
    });
};
