'use strict';

const proxyquire = require('proxyquire');
const expect = require('chai').expect;

let writeFileErr;
let unlinkErr;
let unlinkCalled;
let writeFileCalles;

const nuxtModule = proxyquire('./index', {
  fs: {
    writeFile(path, content, cb) {
      writeFileCalles = true;
      cb(writeFileErr, {path, content});
    },
    unlink(path, cb) {
      unlinkCalled = true;
      cb(unlinkErr, path);
    }
  }
});

describe('cname module', () => {
  const baseOptions = {
    srcDir: '/tmp/toto',
    generateCNAME: true,
    dev: false,
    generate: true
  };

  let nuxt;

  beforeEach(() => {
    nuxt = {
      options: baseOptions,
      nuxtModule
    };

    unlinkCalled = false;
    writeFileCalles = false;
    writeFileErr = null;
    unlinkErr = null;
  });

  it('should write CNAME file when when in generate mode', () => {
    return nuxt.nuxtModule({baseUrl: 'github.com'})
      .then(({path, content}) => {
        expect(path).to.equal('/tmp/toto/static/CNAME');
        expect(content).to.equal('github.com');
      });
  });

  it('should not write any file when it\'s not nuxt generate mode', () => {
    return nuxt.nuxtModule({
      generate: false
    })
      .then(() => {
        expect(unlinkCalled).to.be.false;
        expect(writeFileCalles).to.be.false;
      });
  });

  it('should not write any file when nuxt is in dev mode', () => {
    return nuxt.nuxtModule({
      dev: true
    })
      .then(() => {
        expect(unlinkCalled).to.be.false;
        expect(writeFileCalles).to.be.false;
      });
  });

  it('should not write any file when generateCNAME option is at false', () => {
    return nuxt.nuxtModule({
      generateCNAME: false
    })
      .then(() => {
        expect(unlinkCalled).to.be.false;
        expect(writeFileCalles).to.be.false;
      });
  });

  it('should not write any file when there is no baseUrl', () => {
    return nuxt.nuxtModule({
      baseUrl: null
    })
      .then(() => {
        expect(unlinkCalled).to.be.false;
        expect(writeFileCalles).to.be.false;
      });
  });
});
