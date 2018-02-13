'use strict';

const fs = require('fs');
const {promisify} = require('util');
const path = require('path');

const unlink = promisify(fs.unlink);
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

  const cnamePath = path.resolve(this.options.srcDir, path.join('static', 'CNAME'));

  return unlink(cnamePath).then(() => writeFile(cnamePath, options.baseUrl));
};
