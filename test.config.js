require.config({
//  baseUrl: '/',

  paths: {
    "mocha": "vendor/mocha",
    "chai": 'vendor/chai',
    // AMD supported
    "sinon-chai": "vendor/sinon-chai",
    "sinon": "vendor/sinon-1.7.3"
  },

  // for non-AMD modules
  shim: {
    "mocha": {
      exports: "mocha"
    },
    "chai": {
      exports: "chai"
    },
    "sinon": {
      exports: "sinon"
    }
  }
});

require(["require", "mocha", "chai"], function (require, mocha, chai) {
  expect = chai.expect;

  mocha.setup("bdd");

  require(["test/core_test"], function () {
    if (window.mochaPhantomJS) { mochaPhantomJS.run(); }
    else { mocha.run(); }
  });
});

